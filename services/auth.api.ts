import http from "./http";
import { User } from "../types/auth";

export async function login(
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  const res = await http.post("/users/login", { email, password });
  return res.data;
}

export async function register(
  username: string,
  email: string,
  password: string,
  role: string
): Promise<{ user: User; token: string }> {
  const res = await http.post("/users/signup", {
    username,
    email,
    password,
    role,
  });
  return res.data;
}

export async function logoutApi(): Promise<void> {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  delete http.defaults.headers.common["Authorization"];
}
