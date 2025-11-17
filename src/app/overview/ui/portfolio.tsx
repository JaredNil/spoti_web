'use client'

import {
	Send,
	Calendar,
	MapPin,
	Briefcase,
	Award,
	Code,
	User,
	ChevronRight,
	Mail,
	Phone,
	MessageCircle,
	Github,
	Copy,
	ExternalLink,
} from 'lucide-react'
import { Globe } from 'lucide-react'
import { toast } from 'sonner'

import { profile } from '../const/portfolio-data'
import { Contacts } from './portfolio/contacts'

import { useTranslation } from '@/shared/i18n'
import { Badge } from '@/shared/ui/kit/badge'
import { Button } from '@/shared/ui/kit/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/kit/card'
import { Separator } from '@/shared/ui/kit/separator'

export function Portfolio() {
	const { t } = useTranslation()

	const copyToClipboard = (text: string, type: string) => {
		navigator.clipboard.writeText(text)
		toast.success(`${type} ${t('copiedToClipboard')}`)
	}

	return (
		<>
			<div className="mb-4">
				<div className="flex flex-col gap-4">
					<div>
						<h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
							{profile.name}
						</h2>
						<h3 className="text-2xl md:text-4xl text-slate-200 font-medium mb-1 drop-shadow-md">
							{profile.title}
						</h3>
						<div className="flex items-center text-sm text-slate-300">
							<MapPin className="w-4 h-4 mr-1" />
							{profile.location}
						</div>
					</div>

					<div className="flex flex-wrap flex-row gap-3">
						<Contacts
							icon={<Mail className="w-4 h-4" />}
							label={t('email')}
							value={profile.email}
							onClick={() =>
								copyToClipboard(profile.email, t('email'))
							}
						/>
						<Contacts
							icon={<Phone className="w-4 h-4" />}
							label={t('phone')}
							value={profile.phone}
							onClick={() =>
								copyToClipboard(profile.phone, t('phone'))
							}
						/>
						<Contacts
							icon={<Send className="w-4 h-4" />}
							label="Telegram"
							transit={true}
							value={profile.telegram}
							onClick={() =>
								window.open(`https://t.me/drag11`, '_blank')
							}
						/>
						<Contacts
							icon={<MessageCircle className="w-4 h-4" />}
							label="WhatsApp"
							transit={true}
							value={profile.whatsapp}
							onClick={() =>
								window.open(
									`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`,
									'_blank'
								)
							}
						/>

						<Contacts
							icon={<Github className="w-4 h-4" />}
							label="GitHub"
							transit={true}
							value={profile.github}
							onClick={() =>
								window.open(
									`https://${profile.github}`,
									'_blank'
								)
							}
						/>
					</div>
				</div>
			</div>

			<Separator className="mb-6 bg-white/20" />

			<section className="mb-5 ">
				<h4 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
					<User className="w-6 h-6 text-blue-400" />
					{t('aboutMe')}
				</h4>
				<Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20">
					<CardContent className="">
						<p className=" text-slate-200 leading-relaxed">
							{profile.about}
						</p>
					</CardContent>
				</Card>
			</section>

			<section className="mb-5 ">
				<h4 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
					<Briefcase className="w-6 h-6 text-indigo-400" />
					{t('workExperience')}
				</h4>
				<div className="space-y-4 md:space-y-6">
					{profile.experience.map((exp, idx) => (
						<Card
							key={idx}
							className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all"
						>
							<CardHeader className="pb-4">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
									<div>
										<CardTitle className="text-xl text-white">
											{exp.role}
										</CardTitle>
										<p className="text-slate-300 font-medium">
											{exp.company}
										</p>
									</div>
									<div className="flex items-center text-sm text-slate-400">
										<Calendar className="w-4 h-4 mr-1" />
										{exp.period}
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className="mb-4">
									<h3 className="font-semibold mb-2 flex items-center gap-1 text-white">
										<Award className="w-4 h-4 text-amber-400" />
										{t('keyAchievements')}
									</h3>
									<ul className="space-y-2">
										{exp.achievements.map((a, i) => (
											<li
												key={i}
												className="flex items-start gap-2"
											>
												<ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
												<span className="text-slate-200">
													{a}
												</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2 flex items-center gap-1 text-white">
										<Code className="w-4 h-4 text-blue-400" />
										{t('techStack')}
									</h3>
									<div className="flex flex-wrap gap-2">
										{exp.stack.map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
												className="text-xs bg-white/10 text-white border-white/20"
											>
												{tech}
											</Badge>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="mb-5 ">
				<h4 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
					<Code className="w-6 h-6 text-indigo-400" />
					{t('technologies')}
				</h4>
				<Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors">
					<CardContent>
						<div className="flex flex-wrap justify-between gap-2">
							{profile.skills.map((skill) => (
								<Badge
									key={skill}
									variant="outline"
									className="text-sm py-1.5 px-3 
									bg-white/10 hover:bg-white/20 transition-colors
									 border-white/20"
								>
									{skill}
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>
			</section>

			<section className="mb-5">
				<h4 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
					<Phone className="w-6 h-6 text-indigo-400" />
					{t('contacts')}
				</h4>
				<Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-colors">
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-blue-400" />
								<div>
									<div className="text-sm text-slate-400">
										{t('email')}
									</div>
									<div
										className="text-white cursor-pointer hover:text-blue-300 flex items-center gap-1"
										onClick={() =>
											copyToClipboard(
												profile.email,
												t('email')
											)
										}
									>
										{profile.email}
										<Copy className="w-3 h-3" />
									</div>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-green-400" />
								<div>
									<div className="text-sm text-slate-400">
										{t('phone')}
									</div>
									<div
										className="text-white cursor-pointer hover:text-green-300 flex items-center gap-1"
										onClick={() =>
											copyToClipboard(
												profile.phone,
												t('phone')
											)
										}
									>
										{profile.phone}
										<Copy className="w-3 h-3" />
									</div>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Send className="w-5 h-5 text-blue-400" />
								<div>
									<div className="text-sm text-slate-400">
										Telegram
									</div>
									<div
										className="text-white cursor-pointer hover:text-blue-300 flex items-center gap-1"
										onClick={() =>
											window.open(
												`https://t.me/drag11`,
												'_blank'
											)
										}
									>
										{profile.telegram}
										<ExternalLink className="w-3 h-3" />
									</div>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<MessageCircle className="w-5 h-5 text-green-500" />
								<div>
									<div className="text-sm text-slate-400">
										WhatsApp
									</div>
									<div
										className="text-white cursor-pointer hover:text-green-400 flex items-center gap-1"
										onClick={() =>
											window.open(
												`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`,
												'_blank'
											)
										}
									>
										{profile.whatsapp}
										<ExternalLink className="w-3 h-3" />
									</div>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Github className="w-5 h-5 text-gray-300" />
								<div>
									<div className="text-sm text-slate-400">
										GitHub
									</div>
									<div
										className="text-white cursor-pointer hover:text-gray-300 flex items-center gap-1"
										onClick={() =>
											window.open(
												`https://${profile.github}`,
												'_blank'
											)
										}
									>
										{profile.github}
										<ExternalLink className="w-3 h-3" />
									</div>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Globe className="w-5 h-5 text-purple-400" />
								<div>
									<div className="text-sm text-slate-400">
										{t('website')}
									</div>
									<div
										className="text-white cursor-pointer hover:text-purple-300 flex items-center gap-1"
										onClick={() =>
											window.open(
												`https://${profile.website}`,
												'_blank'
											)
										}
									>
										{profile.website}
										<ExternalLink className="w-3 h-3" />
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
			<Separator className="mb-6 bg-white/20" />
		</>
	)
}
