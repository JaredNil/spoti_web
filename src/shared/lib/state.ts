// import { rtkApi } from '../api/rtkApi'

import { HomepageSchema } from '@/app/home/model/types/homepageSchema'
import type { SearchpageSchema } from '@/app/search'
import { UploadpageSchema } from '@/app/upload'
import { UserSchema } from '@/entities/user'
import { PlayerSchema } from '@/widgets/player/model/types/playerSchema'

export interface StateSchema {
	user: UserSchema
	player: PlayerSchema

	homepage?: HomepageSchema
	searchpage?: SearchpageSchema
	uploadpage?: UploadpageSchema
	// [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	[key: string]: any
}
