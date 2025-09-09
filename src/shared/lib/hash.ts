export const shortHash = () =>
	[...crypto.getRandomValues(new Uint8Array(5))]
		.map((b) => b.toString(36).padStart(2, '0'))
		.join('')
		.slice(0, 10)
