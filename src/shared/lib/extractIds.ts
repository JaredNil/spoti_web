export const extractIds = <T extends { id: string }>(items: T[]): string[] =>
	items.map(({ id }) => id)
