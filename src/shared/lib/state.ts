import { rtkApi } from '../api/api'

import { QueuepageSchema } from '@/app/queue'
import { SearchpageSchema } from '@/app/search'
import { UploadpageSchema } from '@/app/upload'
import { MetaSchema } from '@/entities/meta'
import { UserSchema } from '@/entities/user'
import { AuthSchema } from '@/features/authModal'
import { PlayerSchema } from '@/widgets/player'

export interface StateSchema {
	meta: MetaSchema
	user: UserSchema
	player: PlayerSchema
	auth: AuthSchema

	searchpage?: SearchpageSchema
	uploadpage?: UploadpageSchema
	queuepage?: QueuepageSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	// [cfApi.reducerPath]: ReturnType<typeof cfApi.reducer>
	[key: string]: any
}
