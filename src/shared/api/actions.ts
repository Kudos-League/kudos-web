import { Environment, getEndpointUrl } from "./config";
import { CreatePostDTO, UserLoginRequestSchemaDTO } from "./types";
import axios from "axios";

// TODO: Type return value if/when we factor API types into a codebase shared by FE/BE
/** @throws {AxiosError} */
export async function createPost(request: CreatePostDTO) {
  return await axios.post(`${getEndpointUrl(Environment.LOCAL)}/posts`, request);
}

export async function login(request: UserLoginRequestSchemaDTO) {
  return await axios.post(`${getEndpointUrl(Environment.LOCAL)}/posts`, request);
}