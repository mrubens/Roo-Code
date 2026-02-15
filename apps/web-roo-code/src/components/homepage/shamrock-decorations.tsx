"use client"

import { useEffect, useState } from "react"

interface Shamrock {
	id: number
	left: number
	delay: number
	duration: number
	size: number
	rotation: number
}

export function ShamrockDecorations() {
	const [shamrocks, setShamrocks] = useState<Shamrock[]>([])

	useEffect(() => {
		// Generate random shamrocks
		const newShamrocks: Shamrock[] = Array.from({ length: 15 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			delay: Math.random() * 10,
			duration: 15 + Math.random() * 10,
			size: 20 + Math.random() * 30,
			rotation: Math.random() * 360,
		}))
		setShamrocks(newShamrocks)
	}, [])

	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			{shamrocks.map((shamrock) => (
				<div
					key={shamrock.id}
					className="absolute animate-float"
					style={{
						left: `${shamrock.left}%`,
						top: "-50px",
						animationDelay: `${shamrock.delay}s`,
						animationDuration: `${shamrock.duration}s`,
						animationIterationCount: "infinite",
						animationTimingFunction: "linear",
					}}>
					<ShamrockIcon
						size={shamrock.size}
						rotation={shamrock.rotation}
						className="opacity-20 dark:opacity-10"
					/>
				</div>
			))}
		</div>
	)
}

interface ShamrockIconProps {
	size?: number
	rotation?: number
	className?: string
}

export function ShamrockIcon({ size = 24, rotation = 0, className = "" }: ShamrockIconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transform: `rotate(${rotation}deg)` }}
			className={className}>
			<path
				d="M12 2C10.9 2 10 2.9 10 4C10 4.7 10.3 5.4 10.8 5.8C10.3 6.2 10 6.9 10 7.6C10 8.7 10.9 9.6 12 9.6C12.7 9.6 13.4 9.3 13.8 8.8C14.2 9.3 14.9 9.6 15.6 9.6C16.7 9.6 17.6 8.7 17.6 7.6C17.6 6.9 17.3 6.2 16.8 5.8C17.3 5.4 17.6 4.7 17.6 4C17.6 2.9 16.7 2 15.6 2C14.9 2 14.2 2.3 13.8 2.8C13.4 2.3 12.7 2 12 2Z"
				fill="#22c55e"
			/>
			<path
				d="M8.4 7.6C8.4 6.5 7.5 5.6 6.4 5.6C5.7 5.6 5 5.9 4.6 6.4C4.2 5.9 3.5 5.6 2.8 5.6C1.7 5.6 0.8 6.5 0.8 7.6C0.8 8.7 1.7 9.6 2.8 9.6C3.5 9.6 4.2 9.3 4.6 8.8C5 9.3 5.7 9.6 6.4 9.6C7.5 9.6 8.4 8.7 8.4 7.6Z"
				fill="#16a34a"
			/>
			<path
				d="M23.2 7.6C23.2 6.5 22.3 5.6 21.2 5.6C20.5 5.6 19.8 5.9 19.4 6.4C19 5.9 18.3 5.6 17.6 5.6C16.5 5.6 15.6 6.5 15.6 7.6C15.6 8.7 16.5 9.6 17.6 9.6C18.3 9.6 19 9.3 19.4 8.8C19.8 9.3 20.5 9.6 21.2 9.6C22.3 9.6 23.2 8.7 23.2 7.6Z"
				fill="#15803d"
			/>
			<path d="M11 9.6L10.5 22H13.5L13 9.6H11Z" fill="#166534" />
		</svg>
	)
}
