'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Three() {
	const mountRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		let mounted = true

		;(async () => {
			const { OrbitControls } = await import(
				'three/examples/jsm/controls/OrbitControls.js'
			)
			const { LineMaterial } = await import(
				'three/examples/jsm/lines/LineMaterial.js'
			)
			const { Wireframe } = await import(
				'three/examples/jsm/lines/Wireframe.js'
			)
			const { WireframeGeometry2 } = await import(
				'three/examples/jsm/lines/WireframeGeometry2.js'
			)

			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true,
			})
			renderer.setPixelRatio(window.devicePixelRatio)
			const mount = mountRef.current!
			mount.appendChild(renderer.domElement)

			const scene = new THREE.Scene()
			const camera = new THREE.PerspectiveCamera(40, 1, 1, 1000)
			camera.position.set(-50, 0, 50)

			const controls = new OrbitControls(camera, renderer.domElement)
			controls.minDistance = 10
			controls.maxDistance = 500

			const geo = new THREE.IcosahedronGeometry(20, 1)
			const geometry = new WireframeGeometry2(geo)
			const matLine = new LineMaterial({ color: 0x22c55e, linewidth: 5 })
			const wireframe = new Wireframe(geometry, matLine)
			scene.add(wireframe)

			const resize = () => {
				const { clientWidth, clientHeight } = mount
				renderer.setSize(clientWidth, clientHeight)
				camera.aspect = clientWidth / clientHeight
				camera.updateProjectionMatrix()
			}
			resize()
			window.addEventListener('resize', resize)

			let frameId = 0
			const animate = () => {
				if (!mounted) return
				frameId = requestAnimationFrame(animate)
				scene.rotation.y += 0.002
				controls.update()
				renderer.render(scene, camera)
			}
			animate()

			return () => {
				mounted = false
				cancelAnimationFrame(frameId)
				window.removeEventListener('resize', resize)
				mount.removeChild(renderer.domElement)
				renderer.dispose()
			}
		})()
	}, [])

	return <div ref={mountRef} className="w-full h-[30vh]  " />
}
