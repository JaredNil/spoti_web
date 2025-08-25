import { rtkApi } from '../api/rtkApi'

import { HomepageSchema } from '@/app/home'
import { QueuepageSchema } from '@/app/queue'
import { SearchpageSchema } from '@/app/search'
import { UploadpageSchema } from '@/app/upload'
import { UserSchema } from '@/entities/user'
import { AuthSchema } from '@/features/auth'
import { PlayerSchema } from '@/widgets/player'

export interface StateSchema {
	user: UserSchema
	player: PlayerSchema
	auth: AuthSchema

	homepage?: HomepageSchema
	searchpage?: SearchpageSchema
	uploadpage?: UploadpageSchema
	queuepage?: QueuepageSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	[key: string]: any
}
