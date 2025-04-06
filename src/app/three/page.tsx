"use client"

import { createRoot } from "react-dom/client"
import { Canvas, useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/addons/loaders/OBJLoader.js"
import { Suspense } from "react"

function Globe() {
	const obj = useLoader(OBJLoader, `http://localhost:3000/models/trees/lowpoly_tree_sample.obj`)

	return (
		<primitive object={obj} scale={0.05} />
	)
}

export default function Scene() {
	return (
		<div id="canvas-container" className="w-[75vw] h-[75vh] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
			<Canvas>
				<Suspense fallback={null}>
					<ambientLight intensity={0.1} />
					<Globe />
				</Suspense>
			</Canvas>
		</div>
	)
}

if (typeof window !== "undefined") {
	const container: HTMLElement = document.getElementById("canvas-container")!
	createRoot(container).render(<Scene />)
}
