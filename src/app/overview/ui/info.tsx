import { sections } from '../const/data'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/kit/card'
import { Separator } from '@/shared/ui/kit/separator'

export function Info() {
	return (
		<>
			{sections.map((sec) => (
				<section key={sec.title}>
					<h3 className="mb-2 text-2xl ">{sec.title}</h3>

					{sec.type === 'feature' && (
						<div
							className={`grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}
						>
							{sec.items.map((it: any) => (
								<Card
									key={it.title}
									className="bg-neutral-400/5 border-neutral-800 flex justify-center"
								>
									<CardContent className="flex items-center gap-4 ">
										<it.icon
											className="mt-1 text-emerald-400"
											size={20}
										/>
										<div>
											<p className="font-medium">
												{it.title}
											</p>
											<p className="text-sm text-neutral-400">
												{it.desc}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					)}

					{sec.type === 'tech' && (
						<div
							className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}
						>
							{sec.items.map((card: any) => (
								<Card
									key={card.cardTitle}
									className="border-neutral-800 bg-neutral-400/5"
								>
									<CardHeader>
										<CardTitle className="text-base">
											{card.cardTitle}
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-2">
										{card.list.map((t: any) => (
											<div
												key={t.desc}
												className="flex items-center gap-3"
											>
												{t.icon && (
													<t.icon
														className="text-emerald-400"
														size={16}
													/>
												)}
												<span className="text-sm text-neutral-300">
													{t.desc}
												</span>
											</div>
										))}
									</CardContent>
								</Card>
							))}
						</div>
					)}

					<Separator className="my-6 bg-neutral-800" />
				</section>
			))}
		</>
	)
}
