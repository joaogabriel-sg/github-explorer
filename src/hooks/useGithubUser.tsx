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

interface Languages {
  name: string;
  color: string;
}

interface GithubUserContextProps {
  user: User;
  repositories: Repository[];
  languages: Languages[];
  loading: boolean;
  error: boolean;
  getUserData: (username: string) => void;
  resetGithubUser: () => void;
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
  const [languages, setLanguages] = useState<Languages[]>([]);

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
  }

  return (
    <GithubUserContext.Provider
      value={{
        user,
        repositories,
        languages,
        loading,
        error,
        getUserData,
        resetGithubUser,
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
