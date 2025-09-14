import { Env, Handler } from '..'
import { withCors, withError } from './utils'

type Route = {
	method: string
	pattern: RegExp
	handler: Handler
	params?: string[]
}

export class Router {
	private routes: Route[] = []

	get(pattern: RegExp, handler: Handler, params?: string[]) {
		this.routes.push({ method: 'GET', pattern, handler, params })
	}
	post(pattern: RegExp, handler: Handler, params?: string[]) {
		this.routes.push({ method: 'POST', pattern, handler, params })
	}
	put(pattern: RegExp, handler: Handler, params?: string[]) {
		this.routes.push({ method: 'PUT', pattern, handler, params })
	}
	patch(pattern: RegExp, handler: Handler, params?: string[]) {
		this.routes.push({ method: 'PATCH', pattern, handler, params })
	}
	delete(pattern: RegExp, handler: Handler, params?: string[]) {
		this.routes.push({ method: 'DELETE', pattern, handler, params })
	}

	async handle(
		req: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const url = new URL(req.url)
		for (const route of this.routes) {
			if (route.method !== req.method) continue
			const match = url.pathname.match(route.pattern)
			if (!match) continue
			const params: Record<string, string> = {}
			if (route.params) {
				route.params.forEach((name, i) => (params[name] = match[i + 1]))
			}
			const wrapped = withCors(withError(route.handler))
			return wrapped(req, env, ctx, params)
		}
		return new Response('Not Found', { status: 404 })
	}
}
