"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/types/auth";
import * as authApi from "@/services/auth.api";

interface AuthContextType {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser) as User;
        setUser(parsedUser);
        setToken(storedToken);
      } catch (err) {
        console.warn("Invalid localStorage user, clearing", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  const setAuth = (user: User, token: string) => {
    setUser(user);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const login = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password required");

    const res = await authApi.login(email, password);
    setAuth(res.user, res.token);
  };


  const signup = async (username: string, email: string, password: string, role: string) => {
    if (!username || !email || !password) throw new Error("All fields required");

    const res = await authApi.register(username, email, password, role);
    setAuth(res.user, res.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    authApi.logoutApi();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setAuth,
        login,
        signup,
        logout,
        isAuthenticated: !!user && !!token,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
