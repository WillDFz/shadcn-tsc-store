'use client'
import { createContext, useContext, ReactNode, useState } from 'react';
import User from '@/interfaces/User';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter()

  const login = (userData: User) => {
    setUser(userData);
    console.log(userData);
  };

  const logout = () => {
    setUser(null);
    router.push('/login')
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth fora do Provider');
  }

  return context;
};
