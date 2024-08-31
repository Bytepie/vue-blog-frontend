// Start Login/Register---------------
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}
// End Login/Register ----------------

// Start PostInputs ------------------
export interface PostInputs {
  title: string;
  post_content: string;
}
