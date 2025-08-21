// import { rtkApi } from '../api/rtkApi'

import { HomepageSchema } from '@/app/home/model/types/homepageSchema'
import { AccountpageSchema } from '@/components/accountpage'
import type { SearchpageSchema } from '@/components/searchpage'
import { UploadpageSchema } from '@/components/uploadpage'
import { UserSchema } from '@/entities/user'
import { PlayerSchema } from '@/widgets/player/model/types/playerSchema'

export interface StateSchema {
	user: UserSchema
	player: PlayerSchema

	homepage?: HomepageSchema
	accountpage?: AccountpageSchema
	searchpage?: SearchpageSchema
	uploadpage?: UploadpageSchema
	// [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	[key: string]: any
}
