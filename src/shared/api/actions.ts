import { Environment, getEndpointUrl } from "./config";
import { CreatePostDTO, UserLoginRequestSchemaDTO, UserLoginResponseDTO } from "./types";
import axios from "axios";

// TODO: Type return value if/when we factor API types into a codebase shared by FE/BE
/** @throws {AxiosError} */
export async function createPost(request: CreatePostDTO) {
  return await axios.post(`${getEndpointUrl(Environment.LOCAL)}/posts`, request);
}

export async function login(request: UserLoginRequestSchemaDTO): Promise<UserLoginResponseDTO> {
  return await axios.post(`${getEndpointUrl(Environment.LOCAL)}/users/login`, request);
}