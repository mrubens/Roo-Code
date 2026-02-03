import { Button } from "@/components/ui"
import { ArrowRight, Download } from "lucide-react"
import { EXTERNAL_LINKS } from "@/lib/constants"

export function CTASection() {
	return (
		<section className="py-24 bg-muted/30 border-t border-border relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
			<div className="absolute inset-0">
				<div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 dark:bg-cyan-400/20 blur-[100px] animate-pulse-glow" />
				<div
					className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-500/10 dark:bg-violet-400/20 blur-[100px] animate-pulse-glow"
					style={{ animationDelay: "1.5s" }}
				/>
			</div>
			<div className="container px-4 mx-auto sm:px-6 lg:px-8 text-center relative z-10">
				<h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 dark:from-cyan-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
					Build faster. Solo or Together.
				</h2>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button
						size="lg"
						className="w-full sm:w-auto h-12 px-8 text-base group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 border-0 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
						<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
						<a
							href={EXTERNAL_LINKS.MARKETPLACE}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 relative z-10">
							<Download className="h-4 w-4" />
							Install on VS Code
						</a>
					</Button>

					<Button
						size="lg"
						className="w-full sm:w-auto h-12 px-8 text-base group relative overflow-hidden bg-card/40 dark:bg-card/60 backdrop-blur-sm border-2 border-violet-500/50 dark:border-violet-400/50 hover:border-violet-500 dark:hover:border-violet-400 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all">
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
						<a
							href={EXTERNAL_LINKS.CLOUD_APP_SIGNUP}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 relative z-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent font-semibold">
							Try Cloud for Free
							<ArrowRight className="h-4 w-4 text-violet-600 dark:text-violet-400" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	)
}
