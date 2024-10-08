export interface Track {
	id: number;
	userId: number;
	author: string;
	title: string;
	songLink: string;
	imageLink: string;
}

export type Trackes = Track[]