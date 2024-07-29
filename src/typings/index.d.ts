export enum RequestType {
	Request = 1,
	Offer = 2
}

export type User = {
	id: number;
};

export type Post = {
	id: number;
	userID: number;
	author?: object;
	content: string;
	createdAt: Date;
	type: RequestType;
};
