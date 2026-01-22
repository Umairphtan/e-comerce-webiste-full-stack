export interface User {
  id?: string;
  username: string,
  password?: string;
  email: string;
  role: User;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
