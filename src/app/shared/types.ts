export interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export interface RegisterRequest {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
export interface User {
  email: string;
  token: string;
  username: string;
  bio: string | null;
  image: string | null;
}

export interface AuthState {
  isSubmitting: boolean;
}
