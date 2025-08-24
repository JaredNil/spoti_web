import { HomepageSchema } from '@/app/home/model/types/homepageSchema'
import { QueuepageSchema } from '@/app/queue/model/types/queuepageSchema'
import type { SearchpageSchema } from '@/app/search'
import { UploadpageSchema } from '@/app/upload'
import { UserSchema } from '@/entities/user'
import { AuthSchema } from '@/features/auth'
import { PlayerSchema } from '@/widgets/player/model/types/playerSchema'

export interface StateSchema {
	user: UserSchema
	player: PlayerSchema
	auth: AuthSchema

	homepage?: HomepageSchema
	searchpage?: SearchpageSchema
	uploadpage?: UploadpageSchema
	queuepage?: QueuepageSchema
	// [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	[key: string]: any
}
