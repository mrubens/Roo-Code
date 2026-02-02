"use client"

import { useEffect, useRef } from "react"

export function BouncingKangaroo() {
	const kangarooRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const kangaroo = kangarooRef.current
		if (!kangaroo) return

		let positionY = 0
		let velocityY = 0
		let positionX = Math.random() * (window.innerWidth - 100)
		let velocityX = (Math.random() - 0.5) * 2
		const gravity = 0.5
		const bounce = 0.7
		const groundLevel = window.innerHeight - 80

		function animate() {
			if (!kangaroo) return

			// Apply gravity
			velocityY += gravity
			positionY += velocityY

			// Move horizontally
			positionX += velocityX

			// Bounce off ground
			if (positionY >= groundLevel) {
				positionY = groundLevel
				velocityY *= -bounce
			}

			// Bounce off walls
			if (positionX <= 0 || positionX >= window.innerWidth - 60) {
				velocityX *= -1
				positionX = Math.max(0, Math.min(positionX, window.innerWidth - 60))
			}

			// Apply position with slight rotation based on velocity
			const rotation = velocityX * 2
			kangaroo.style.transform = `translate(${positionX}px, ${positionY}px) rotate(${rotation}deg)`

			requestAnimationFrame(animate)
		}

		const animationId = requestAnimationFrame(animate)

		const handleResize = () => {
			positionX = Math.min(positionX, window.innerWidth - 60)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			cancelAnimationFrame(animationId)
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div
			ref={kangarooRef}
			className="fixed pointer-events-none z-50 text-6xl select-none"
			style={{
				willChange: "transform",
			}}
			aria-hidden="true">
			🦘
		</div>
	)
}
