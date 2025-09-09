export async function fileToBuffer(file: File): Promise<Uint8Array> {
	const ab = await file.arrayBuffer()
	return new Uint8Array(ab)
}
