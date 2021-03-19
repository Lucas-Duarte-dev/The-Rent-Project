import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthContextState {
  token: TokenState;
  signIn({ email, password }: UserData): Promise<void>;
  userLogged(): boolean;
}

interface UserData {
  email: string;
  password: string;
}

interface TokenState {
  token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem("@Permission:token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  const signIn = useCallback(async ({ email, password }: UserData) => {
    const response = await api.post("/session", {
      email,
      password,
    });

    const { token } = response.data;

    localStorage.setItem("@Permission:token", token);

    setToken(token);
  }, []);

  const userLogged = useCallback(() => {
    const token = localStorage.getItem("@Permission:token");

    if (token) {
      return true;
    }

    return false;
  }, []);

  return (
    <AuthContext.Provider value={{ token, signIn, userLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
