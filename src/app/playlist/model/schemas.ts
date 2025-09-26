import { z } from 'zod'

export const albumFormSchema = z.object({
	title: z.string().min(1, 'Название обязательно'),
	description: z.string().optional(),
})

export type AlbumFormValues = z.infer<typeof albumFormSchema>
