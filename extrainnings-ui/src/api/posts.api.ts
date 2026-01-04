import { http } from "./http";
import type { Post } from "../types/post";

export const getPosts = async (): Promise<Post[]> => {
  const response = await http.get<Post[]>("/posts");
  return response.data;
};
