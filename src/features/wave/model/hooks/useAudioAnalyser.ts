'use client'
import { useEffect, useRef, useState } from 'react'

export const useAudioAnalyser = (audio: HTMLAudioElement | null) => {
	const audioCtxRef = useRef<AudioContext | null>(null)
	const analyserRef = useRef<AnalyserNode | null>(null)
	const dataRef = useRef<Uint8Array>(new Uint8Array(128))
	const [ready, setReady] = useState(false)

	useEffect(() => {
		if (!audio) return
		const ctx = new (window.AudioContext ||
			(window as any).webkitAudioContext)()
		const source = ctx.createMediaElementSource(audio)
		const analyser = ctx.createAnalyser()
		analyser.fftSize = 256
		source.connect(analyser)
		analyser.connect(ctx.destination)
		audioCtxRef.current = ctx
		analyserRef.current = analyser
		dataRef.current = new Uint8Array(analyser.frequencyBinCount)
		setReady(true)

		return () => void ctx.close()
	}, [audio])

	const getData = () => {
		if (analyserRef.current)
			analyserRef.current.getByteFrequencyData(dataRef.current)
		return dataRef.current
	}

	return { ready, getData }
}
