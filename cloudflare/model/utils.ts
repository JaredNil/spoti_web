import { Handler } from '..'

export const json = (data: unknown, status = 200): Response =>
	new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	})

export const httpError = (msg: string, status = 400): Response =>
	new Response(msg, {
		status,
		headers: { 'Access-Control-Allow-Origin': '*' },
	})

export const withCors =
	(handler: Handler): Handler =>
	async (req, env, ctx, params) => {
		if (req.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods':
						'GET, POST, PUT, PATCH, DELETE, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
			})
		}
		return handler(req, env, ctx, params)
	}

export const withError =
	(handler: Handler): Handler =>
	async (req, env, ctx, params) => {
		try {
			return await handler(req, env, ctx, params)
		} catch (e) {
			return new Response(`Internal Error: ${(e as Error).message}`, {
				status: 500,
			})
		}
	}

export const get = <T>(ns: KVNamespace, key: string): Promise<T | null> =>
	ns.get(key).then((v) => (v ? (JSON.parse(v) as T) : null))

export const put = <T>(ns: KVNamespace, key: string, value: T): Promise<void> =>
	ns.put(key, JSON.stringify(value))

export const del = (ns: KVNamespace, key: string): Promise<void> =>
	ns.delete(key)

export const list = async <T>(
	ns: KVNamespace,
	prefix: string
): Promise<T[]> => {
	const { keys } = await ns.list({ prefix })
	const items = await Promise.all(keys.map((k) => get<T>(ns, k.name)))
	return items.filter(Boolean) as T[]
}
