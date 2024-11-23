// TODO: Replace all these types with shared types if/when we factor API types into a codebase shared by FE/BE

export type CreatePostDTO = {
  title: string;
  body: string;
  isRequest: boolean;
}

export type PostDTO = {
  id: number;
  senderId: string;
  title: string;
  body: string;
  isRequest: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserLoginRequestSchemaDTO = {
  email: string;
  password: string;
}

export type UserLoginResponseDTO = {
  token: string;
  user: {
    username: string;
  };
}

export type CreateUserDTO = {
  username: string,
  email: string;
  password: string;
}

export type UserSettingsDTO = {
  about?: string;
}