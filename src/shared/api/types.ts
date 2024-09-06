// TODO: Replace all these types with shared types if/when we factor API types into a codebase shared by FE/BE

export type CreatePostDTO = {
    title: string;
    body: string;
    isRequest: boolean;
}