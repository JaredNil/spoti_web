export interface Track {
	id: number;
	userId: number;
	author: string;
	title: string;
	songLink?: string;
	imageLink?: string;
	hash?: string; // empty, for demo. Include in interface 
}

export type Trackes = Track[]

