import { Button } from "@/components/ui"
import {
	CompanyLogos,
	FAQSection,
	Testimonials,
	CTASection,
	OptionOverviewSection,
	PillarsSection,
	UseExamplesSection,
} from "@/components/homepage"
import { EXTERNAL_LINKS } from "@/lib/constants"
import { ArrowRight } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

// Invalidate cache when a request comes in, at most once every hour.
export const revalidate = 3600

export default async function Home() {
	return (
		<>
			<StructuredData />
			<section className="relative flex flex-col items-center overflow-hidden pt-20 pb-12 md:pt-32 md:pb-16">
				{/* Large vivid radial glow behind the hero */}
				<div className="absolute inset-0 z-0 pointer-events-none">
					<div className="absolute left-1/2 top-[30%] h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 dark:bg-violet-600/30 blur-[120px]" />
					<div className="absolute left-1/3 top-[20%] h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 dark:bg-blue-500/20 blur-[100px]" />
					<div className="absolute left-2/3 top-[40%] h-[250px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-500/15 blur-[100px]" />
				</div>
				<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
					{/* Eyebrow badge */}
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 dark:text-violet-300 backdrop-blur-sm">
						<span className="relative flex size-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
							<span className="relative inline-flex size-2 rounded-full bg-violet-500"></span>
						</span>
						The AI dev team that gets things done
					</div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mb-6 leading-tight">
						<span className="bg-gradient-to-r from-white via-violet-100 to-violet-300 bg-clip-text text-transparent dark:from-white dark:via-violet-200 dark:to-violet-400">
							Your AI Software Engineering Team
						</span>
						<br />
						<span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">is here.</span>
					</h1>
					<p className="mt-2 max-w-2xl text-lg text-muted-foreground mb-10">
						Interactive in the IDE, autonomous in the cloud. Use the{" "}
						<strong className="text-foreground/80 text-nowrap">Roo Code Extension</strong> for full control,
						or delegate to <strong className="text-foreground/80 text-nowrap">Cloud Agents</strong> from
						Slack, Github or the web.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mb-16">
						<div className="flex flex-col items-center gap-2">
							<Button
								size="xl"
								className="w-full bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/40 transition-all hover:shadow-violet-700/50 hover:shadow-xl">
								<a
									href={EXTERNAL_LINKS.MARKETPLACE}
									target="_blank"
									rel="noreferrer"
									className="flex items-center justify-center">
									Install VS Code Extension
									<ArrowRight className="ml-2 size-5" />
								</a>
							</Button>
							<span className="text-xs text-muted-foreground">Free and Open Source</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								size="xl"
								variant="outline"
								className="w-full border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 transition-all">
								<a
									href={EXTERNAL_LINKS.CLOUD_APP_SIGNUP_HOME}
									className="flex items-center justify-center">
									Try Cloud for Free
									<ArrowRight className="ml-2 size-5" />
								</a>
							</Button>
							<span className="text-xs text-muted-foreground">No credit card needed</span>
						</div>
					</div>

					<div className="mb-12 px-4">
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
