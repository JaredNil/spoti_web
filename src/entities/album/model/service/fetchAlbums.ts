import { ALBUMS } from '../../../../../public/content/ALBUMS_CONTENT'

export async function fetchAlbumsByUser(user_id: number) {
	const albums = ALBUMS.filter((album) => {
		if (album.user_id === user_id) {
			return album
		}
	})
	return albums
}

// SERVER REST API IMPLEMENT
// export async function fetchAlbums(user_id: number) {
// 	const res = await fetch(`http://localhost:3000/api/albums`, {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			user_id: user_id,
// 		}),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 	if (!res.ok) throw new Error(String(res.status))
// 	return res.json() as Promise<AlbumsCollection>
// }

// CLIENT IMPLEMENT
// export const fetchCommonAlbums = createAsyncThunk<
// 	AlbumsCollection,
// 	void,
// 	ThunkConfig<string>
// >('album/fetchCommonAlbum', async (_, thunkAPI) => {
// 	const { rejectWithValue, extra, dispatch } = thunkAPI

// 	// return ALBUMS.filter((album) => {
// 	// 	if (album.user_id === 0) return album
// 	// })

// 	try {
// 		const res = await extra.api.get<AlbumsCollection>('/app', {
// 			headers: {
// 				withCredentials: true,
// 				'Access-Control-Allow-Origin': '*',
// 				'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
// 				'Access-Control-Allow-Headers':
// 					'Content-Type, Authorization, X-Requested-With',
// 			},
// 		})
// 		// dispatch(mainpageAction.offLoadingData())
// 		return res.data
// 	} catch (error) {
// 		return rejectWithValue('error')
// 	}
// })
