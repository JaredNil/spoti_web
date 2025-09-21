export const extractIds = <T extends { hash: string }>(items: T[]): string[] =>
	items.map(({ hash }) => hash)
