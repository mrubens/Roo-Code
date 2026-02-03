import { Button } from "@/components/ui"
import {
	CompanyLogos,
	FAQSection,
	Testimonials,
	CTASection,
	OptionOverviewSection,
	PillarsSection,
	UseExamplesSection,
	AnimatedBackground,
} from "@/components/homepage"
import { EXTERNAL_LINKS } from "@/lib/constants"
import { ArrowRight, Sparkles } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

// Invalidate cache when a request comes in, at most once every hour.
export const revalidate = 3600

export default async function Home() {
	return (
		<>
			<StructuredData />
			<section className="relative flex flex-col items-center overflow-hidden pt-20 pb-12 md:pt-32 md:pb-16">
				<AnimatedBackground />
				<div className="absolute inset-y-0 left-1/2 h-full w-full max-w-[1400px] -translate-x-1/2 z-1">
					<div className="absolute left-1/2 top-1/2 h-[600px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 dark:bg-cyan-400/30 blur-[140px] animate-pulse-glow" />
					<div
						className="absolute left-1/4 top-1/3 h-[400px] w-[500px] rounded-full bg-violet-500/15 dark:bg-violet-600/25 blur-[120px] animate-pulse-glow"
						style={{ animationDelay: "1s" }}
					/>
					<div
						className="absolute right-1/4 bottom-1/3 h-[400px] w-[500px] rounded-full bg-fuchsia-500/15 dark:bg-fuchsia-500/25 blur-[120px] animate-pulse-glow"
						style={{ animationDelay: "2s" }}
					/>
				</div>
				<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/20 dark:to-violet-400/20 border border-cyan-500/20 dark:border-cyan-400/30 mb-6 backdrop-blur-sm">
						<Sparkles className="size-4 text-cyan-600 dark:text-cyan-400" />
						<span className="text-sm font-medium bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
							Next-Generation AI Coding
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-5xl mb-6 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent animate-fade-in">
						Your AI Software Engineering Team is here.
						<br />
						<span className="text-2xl md:text-4xl bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 dark:from-cyan-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
							Interactive in the IDE, autonomous in the cloud.
						</span>
					</h1>
					<div
						className="mt-2 max-w-3xl text-lg text-muted-foreground mb-10 space-y-3 animate-fade-in"
						style={{ animationDelay: "0.2s" }}>
						<p className="leading-relaxed">
							Use the{" "}
							<strong className="text-nowrap bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
								Roo Code Extension
							</strong>{" "}
							on your computer for full control, or delegate work to your{" "}
							<strong className="text-nowrap bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
								Roo Code Cloud Agents
							</strong>{" "}
							from the web, Slack, Github or wherever your team is.
						</p>
					</div>
					<div
						className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in"
						style={{ animationDelay: "0.4s" }}>
						<div className="flex flex-col items-center gap-2">
							<Button
								size="xl"
								className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all">
								<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
								<a
									href={EXTERNAL_LINKS.MARKETPLACE}
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-center relative z-10">
									Install VS Code Extension
									<ArrowRight className="ml-2 size-5" />
								</a>
							</Button>
							<span className="text-xs text-muted-foreground">Free and Open Source</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								size="xl"
								className="w-full group relative overflow-hidden bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 border-0 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all">
								<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
								<a
									href={EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME}
									className="flex items-center justify-center relative z-10">
									Try Cloud for Free
									<ArrowRight className="ml-2 size-5" />
								</a>
							</Button>
							<span className="text-xs text-muted-foreground">No credit card needed</span>
						</div>
					</div>

					<div className="mb-12 px-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
						<CompanyLogos />
					</div>
				</div>
			</section>

			<PillarsSection />
			<OptionOverviewSection />
			<UseExamplesSection />
			<Testimonials />
			<FAQSection />
			<CTASection />
		</>
	)
}
