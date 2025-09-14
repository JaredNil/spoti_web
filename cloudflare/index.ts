/// <reference types="@cloudflare/workers-types" />
import { Router } from './model/router'
import * as album from './model/albums'
import * as track from './model/tracks'
import * as user from './model/users'

export type Handler = (
	req: Request,
	env: Env,
	ctx: ExecutionContext,
	params: Record<string, string>
) => Promise<Response>

export interface Env {
	ALBUMS_KV: KVNamespace
	TRACKES_KV: KVNamespace
	USERS_KV: KVNamespace
}

const router = new Router()

// albums
router.get(/^\/albums$/, album.listAlbums)
router.post(/^\/albums$/, album.createAlbum)
router.get(/^\/albums\/([a-zA-Z0-9_-]+)$/, album.getAlbum, ['id'])
router.put(/^\/albums\/([a-zA-Z0-9_-]+)$/, album.updateAlbum, ['id'])
router.delete(/^\/albums\/([a-zA-Z0-9_-]+)$/, album.deleteAlbum, ['id'])

// tracks
router.get(/^\/tracks$/, track.listTracks)
router.post(/^\/tracks$/, track.createTrack)
router.get(/^\/tracks\/([^/]+)$/, track.getTrack, ['id'])
router.put(/^\/tracks\/([^/]+)$/, track.updateTrack, ['id'])
router.delete(/^\/tracks\/([^/]+)$/, track.deleteTrack, ['id'])

// users
router.post(/^\/user$/, user.createUser)
router.get(/^\/user\/([^/]+)$/, user.getUser, ['email'])
router.patch(/^\/user\/([^/]+)$/, user.updateUser, ['email'])
router.delete(/^\/user\/([^/]+)$/, user.deleteUser, ['email'])

export default {
	async fetch(
		req: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		return router.handle(req, env, ctx)
	},
}
