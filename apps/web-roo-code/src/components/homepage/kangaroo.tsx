"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Kangaroo() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50, y: 20 }}
			animate={{
				opacity: 1,
				x: 0,
				y: [0, -10, 0],
			}}
			transition={{
				opacity: { duration: 0.8, ease: "easeOut" },
				x: { duration: 0.8, ease: "easeOut" },
				y: {
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.8,
				},
			}}
			className="absolute right-4 top-8 md:right-12 md:top-12 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 pointer-events-none"
			aria-label="Roo mascot">
			<Image
				src="/kangaroo.svg"
				alt="Roo the kangaroo mascot"
				width={160}
				height={160}
				className="w-full h-full drop-shadow-lg"
				priority
			/>
		</motion.div>
	)
}
