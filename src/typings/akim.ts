export type Akimlar = Akim[];

export interface Akim {
	name: string;
	authors: Author[];
	content: string[];
}

export interface Author {
	name: string;
	books: string[];
}
