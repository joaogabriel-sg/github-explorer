import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { langColors } from '../services/langColors';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

interface User {
  id: number;
  name: string;
  login: string;
  bio: string;
  blog: string;
  avatar_url: string;
  repos_url: string;
  company: string;
  location: string;
  followers: number;
  following: number;
}

type LanguageCounter = {
  [key: string]: number;
};

interface Language {
  name: string;
  color: string;
}

interface GithubUserContextProps {
  user: User;
  latestUsers: Pick<User, 'id' | 'name' | 'login' | 'bio' | 'avatar_url'>[];
  repositories: Repository[];
  languages: Language[];
  activeLanguage: string;
  loading: boolean;
  error: boolean;
  getUserData: (username: string) => void;
  resetGithubUser: () => void;
  updateActiveLanguage: (langName: string) => void;
}

interface GithubUserProviderProps {
  children: ReactNode;
}

const GithubUserContext = createContext({} as GithubUserContextProps);

export const GithubUserProvider = ({
  children,
}: GithubUserProviderProps): JSX.Element => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>({} as User);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [activeLanguage, setActiveLanguage] = useState('');
  const [latestUsers, setLatestUsers] = useState<User[]>(() => {
    const latestUsersInLocal = localStorage.getItem(
      '@GithubExplorer:latest-users',
    );

    if (latestUsersInLocal) {
      return JSON.parse(latestUsersInLocal);
    }

    return [];
  });

  useEffect(() => {
    if (!latestUsers.length) return;

    localStorage.setItem(
      '@GithubExplorer:latest-users',
      JSON.stringify(latestUsers),
    );
  }, [latestUsers]);

  useEffect(() => {
    if (!repositories.length) return;

    function getRepositoriesLanguage() {
      const onlyLanguages = repositories
        .map(({ language }) => language)
        .filter(Boolean);

      const languagesCounter = onlyLanguages.reduce(
        (acc: LanguageCounter, language) => ({
          ...acc,
          [language]: (acc[language] || 0) + 1,
        }),
        {},
      );

      const languagesConfigs = Object.keys(languagesCounter).map(
        (language) => ({
          name: language,
          color: langColors[language.toLowerCase()] || '',
        }),
      );

      setLanguages(languagesConfigs);
    }

    getRepositoriesLanguage();
  }, [repositories]);

  function updateActiveLanguage(langName: string) {
    const languageData = languages.find(
      (language) => language.name === langName,
    );

    if (languageData) setActiveLanguage(languageData.name);
    else setActiveLanguage('');
  }

  function updateLatestUsers(newLatestUser: User) {
    const haveUserInLatestUsers = latestUsers.find(
      (latestUser) => latestUser.id === newLatestUser.id,
    );

    if (haveUserInLatestUsers) {
      setLatestUsers(latestUsers);
      return;
    }

    let newLatestUsers = [...latestUsers, newLatestUser];
    if (newLatestUsers.length > 6)
      newLatestUsers = newLatestUsers.slice(newLatestUsers.length - 6);

    setLatestUsers(newLatestUsers);
  }

  async function getUserRepositories(username: string) {
    try {
      setError(false);
      setLoading(true);

      const { data } = await api.get(`users/${username}/repos`);
      setRepositories(data);

      navigate(`profile/${username}`);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function getUserData(username: string) {
    try {
      setError(false);
      setLoading(true);

      const { data } = await api.get(`users/${username}`);
      setUser(data);

      await getUserRepositories(username);
      updateLatestUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function resetGithubUser() {
    setError(false);
    setLoading(false);
    setUser({} as User);
    setRepositories([]);
    setLanguages([]);
    setActiveLanguage('');
  }

  return (
    <GithubUserContext.Provider
      value={{
        user,
        latestUsers,
        repositories,
        languages,
        activeLanguage,
        loading,
        error,
        getUserData,
        resetGithubUser,
        updateActiveLanguage,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
};

export const useGithubUser = (): GithubUserContextProps => {
  const githubUserData = useContext(GithubUserContext);
  return githubUserData;
};
