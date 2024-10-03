import { getEndpointUrl } from "./config";
import { CreatePostDTO, CreateUserDTO, PostDTO, UserLoginRequestSchemaDTO, UserLoginResponseDTO } from "./types";
import axios from "axios";

// TODO: Type all request/response values if/when we factor API types into a codebase shared by FE/BE

/** @throws {AxiosError} */
export async function createPost(request: CreatePostDTO, token: string) {
  return await axios.post(
    `${getEndpointUrl()}/posts`,
    request,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }},
  );
}

/** @throws {AxiosError} */
export async function register(request: CreateUserDTO): Promise<{data: UserLoginResponseDTO}> {
  return await axios.post(`${getEndpointUrl()}/users/register`, request);
}

/** @throws {AxiosError} */
export async function login(request: UserLoginRequestSchemaDTO): Promise<{data: UserLoginResponseDTO}> {
  return await axios.post(`${getEndpointUrl()}/users/login`, request);
}

/** @throws {AxiosError} */
export async function getPosts(): Promise<PostDTO[]> {
  return await axios.get(`${getEndpointUrl()}/posts`);
}