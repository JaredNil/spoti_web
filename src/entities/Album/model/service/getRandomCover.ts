const coversDefaultPlaylist = [
	'https://i.scdn.co/image/ab67616d00001e02f2133fc8964b505a08e5d4a3',
	'https://i.scdn.co/image/ab67616d00001e021efe1deb32b22eed92470019',
	'https://i.scdn.co/image/ab67616d00001e02bd5aa8f695dffd8ae83ff2e9',
];
function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}
export const getRandomCover = () => {
	return coversDefaultPlaylist[getRandomInt(3)];
};
