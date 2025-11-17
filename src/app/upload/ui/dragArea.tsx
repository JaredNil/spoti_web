import { DragEvent, SetStateAction, useCallback, useState } from 'react'

import { TrackForm, UploadState } from '../model/types'
import { useTranslation } from '@/shared/i18n'

export const DragArea = ({
	setTracks,
	isDragging,
	setIsDragging,
	classname,
}: {
	isDragging: boolean
	setTracks: (value: SetStateAction<TrackForm[]>) => void
	setIsDragging: (value: boolean) => void
	classname: string
}) => {
	const { t } = useTranslation()
	const handleDrag = useCallback((e: DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
	}, [])

	const handleDragEnterBox = useCallback((e: DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
			setIsDragging(true)
		}
	}, [])

	const handleDragLeave = useCallback((e: DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.currentTarget === e.target) {
			setIsDragging(false)
		}
	}, [])

	const handleDrop = useCallback((e: DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setIsDragging(false)

		const files = Array.from(e.dataTransfer.files).filter((file) =>
			file.type.startsWith('audio/')
		)

		const newTracks = files.map((file, index) => ({
			id: index.toString(),
			file,
			title: file.name.replace(/\.[^/.]+$/, ''),
			author: '',
			status: 'idle' as UploadState,
		}))

		setTracks((prev) => [...prev, ...newTracks])
	}, [])

	if (isDragging) {
		return (
			<div
				className="fixed inset-0 bg-indigo-900/20 flex items-center justify-center z-50 backdrop-blur-sm"
				onDragEnter={handleDrag}
				onDragLeave={handleDragLeave}
				onDragOver={handleDrag}
				onDrop={handleDrop}
			>
				<div
					className="border-4 border-dashed border-white/50 
					rounded-2xl p-16 text-center 
					pointer-events-none"
				>
					<div className="text-white text-6xl mb-4">📁</div>
					<h2 className="text-white text-4xl font-bold mb-2">
						{t('dropFiles')}
					</h2>
					<p className="text-white/70 text-xl">
						{t('audioFilesWillBeAdded')}
					</p>
				</div>
			</div>
		)
	} else
		return (
			<div
				className={`box-content border-2 border-dashed rounded-xl border-emerald-500 
					p-12 text-center transition-colors
					${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-emerald-500'}
					${classname}`}
				onDragEnter={handleDragEnterBox}
				onDragLeave={handleDragLeave}
				onDragOver={handleDrag}
				onDrop={handleDrop}
			>
				<div className="text-6xl mb-4 select-none">𝅙</div>
				<h3 className="text-xl mb-2 select-none">
					{t('dragAudioFiles')}
				</h3>
				<p className="text-white/70 text-base select-none">
					{t('supportedFormats')}
				</p>
			</div>
		)
}
