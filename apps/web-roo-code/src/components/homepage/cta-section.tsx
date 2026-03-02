import { Button } from "@/components/ui"
import { ArrowRight, Download } from "lucide-react"
import { EXTERNAL_LINKS } from "@/lib/constants"

export function CTASection() {
	return (
		<section className="relative py-32 overflow-hidden border-t border-border">
			{/* Vivid gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-background to-blue-950/40 dark:from-violet-950/80 dark:via-background dark:to-blue-950/60" />
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[100px]" />
				<div className="absolute left-1/4 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[80px]" />
				<div className="absolute right-1/4 top-1/2 h-[300px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/10 blur-[80px]" />
			</div>

			<div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8 text-center">
				<h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-gradient-to-r from-white via-violet-100 to-violet-300 bg-clip-text text-transparent dark:from-white dark:via-violet-200 dark:to-violet-400">
					Build faster.
					<br />
					Solo or Together.
				</h2>
				<p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
					Join over 1 million developers shipping more with Roo Code today.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button
						size="lg"
						className="w-full sm:w-auto h-12 px-8 text-base bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/40 transition-all hover:shadow-violet-700/50 hover:shadow-xl">
						<a
							href={EXTERNAL_LINKS.MARKETPLACE}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2">
							<Download className="h-4 w-4" />
							Install on VS Code
						</a>
					</Button>

					<Button
						variant="outline"
						size="lg"
						className="w-full sm:w-auto h-12 px-8 text-base border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 transition-all">
						<a
							href={EXTERNAL_LINKS.CLOUD_APP_SIGNUP}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2">
							Try Cloud for Free
							<ArrowRight className="h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	)
}
