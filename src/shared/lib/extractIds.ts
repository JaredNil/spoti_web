export const extractIds = <T extends { id: number }>(items: T[]): number[] =>
	items.map(({ id }) => id)
