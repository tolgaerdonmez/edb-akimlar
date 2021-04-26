export type Akimlar = Akim[];

export interface Akim {
  name: string;
  authors: Author[];
}

export interface Author {
  name: string;
  books: string[];
}
