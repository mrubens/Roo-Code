import { Brain, Keyboard, Shield, Users2, Map, Code, MessageCircleQuestion, Bug, TestTube } from "lucide-react"
import Image from "next/image"
import { Link } from "../ui"

const MODEL_LOGOS = [
	"OpenRouter",
	"Anthropic",
	"OpenAI",
	"Gemini",
	"Grok",
	"Bedrock",
	"Moonshot",
	"Qwen",
	"Kimi",
	"Mistral",
	"Ollama",
]
const MODE_EXAMPLES = [
	{
		name: "Architect",
		description: "Plans complex changes without making changes.",
		icon: Map,
	},
	{
		name: "Code",
		description: "Implements, refactors and optimizes code.",
		icon: Code,
	},
	{
		name: "Ask",
		description: "Explains functionality and program behavior.",
		icon: MessageCircleQuestion,
	},
	{
		name: "Debug",
		description: "Diagnoses issues, traces failures, and proposes targeted, reliable fixes.",
		icon: Bug,
	},
	{
		name: "Test",
		description: "Creates and improves performant tests without changing the actual functionality.",
		icon: TestTube,
	},
]

export function PillarsSection() {
	return (
		<section className="py-24 bg-muted/30 relative overflow-hidden">
			<div className="absolute inset-y-0 left-1/2 h-full w-full max-w-[1400px] -translate-x-1/2">
				<div className="absolute left-1/2 top-1/2 h-[800px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 dark:bg-cyan-700/25 blur-[140px] animate-pulse-glow" />
				<div
					className="absolute left-1/3 top-1/4 h-[600px] w-[600px] rounded-full bg-violet-500/10 dark:bg-violet-600/20 blur-[120px] animate-pulse-glow"
					style={{ animationDelay: "1.5s" }}
				/>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] animate-scan-line pointer-events-none" />
			<div className="container px-4 mx-auto sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
						To trust an agent, you have to do it on your own terms.
					</h2>
					<p className="text-xl text-muted-foreground max-w-xl mx-auto">
						Roo is designed from the ground up to give you the confidence to do ever more with AI.
					</p>
				</div>

				<div className="flex flex-col md:grid md:grid-cols-8 gap-8">
					<div className="relative md:col-span-3 h-full">
						<div className="rounded-2xl bg-card/40 dark:bg-card/60 backdrop-blur-xl outline outline-1 outline-cyan-500/30 dark:outline-cyan-400/30 hover:outline-2 hover:outline-cyan-500/50 dark:hover:outline-cyan-400/50 shadow-lg shadow-cyan-500/10 dark:shadow-cyan-400/10 p-8 h-full group transition-all hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute -right-3 -top-5 bg-gradient-to-br from-cyan-500 to-violet-600 border-0 shadow-lg shadow-cyan-500/50 rounded-full p-3 transition-all group-hover:-top-4 group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-cyan-500/60">
								<Brain className="size-8 text-white shrink-0 mt-1" strokeWidth={1.5} />
							</div>
							<div>
								<h3 className="text-2xl font-bold mb-1">Model-agnostic by design</h3>
								<h4 className="font-semibold text-lg">Flexible and future-proof.</h4>
								<div className="text-muted-foreground my-4 space-y-1">
									<p>
										&quot;The best model in the world&quot; changes every other week. Providers
										throttle models with no warning. 1st-party coding agents only work with their
										own models.
									</p>
									<p>Roo doesn&apos;t care.</p>
									<p>
										It works great with 10s of models, from frontier to open weight. Choose from{" "}
										<Link href="/provider">the curated selection we offer at-cost</Link> or bring
										your own key.
									</p>
								</div>
								<div className="mt-6">
									<span className="text-muted-foreground text-sm">
										Compatible with dozens of providers
									</span>
									<div className="mt-4 flex flex-wrap items-center gap-4">
										{MODEL_LOGOS.map((logo, index) => (
											<Image
												key={logo}
												width={20}
												height={20}
												className="size-6 overflow-clip dark:invert"
												style={{ opacity: 1.1 - index / MODEL_LOGOS.length }}
												src={`/logos/${logo.toLowerCase()}.svg`}
												alt={`${logo} Logo`}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative col-span-5 h-full">
						<div className="rounded-2xl bg-card/40 dark:bg-card/60 backdrop-blur-xl outline outline-1 outline-violet-500/30 dark:outline-violet-400/30 hover:outline-2 hover:outline-violet-500/50 dark:hover:outline-violet-400/50 shadow-lg shadow-violet-500/10 dark:shadow-violet-400/10 p-8 h-full group transition-all hover:shadow-2xl hover:shadow-violet-500/20 dark:hover:shadow-violet-400/20 relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute -right-3 -top-5 bg-gradient-to-br from-violet-500 to-fuchsia-600 border-0 shadow-lg shadow-violet-500/50 rounded-full p-3 transition-all group-hover:-top-4 group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-violet-500/60">
								<Users2 className="size-8 text-white shrink-0 mt-1" strokeWidth={1.5} />
							</div>
							<div>
								<h3 className="text-2xl font-bold mb-1">Role-specific Modes</h3>
								<h4 className="font-semibold text-lg">On-task and under control.</h4>
								<div className="text-muted-foreground my-4 space-y-1">
									<p>
										As capable as they are, when let loose, LLMs hallucinate, cheat and can cause
										real damage.
									</p>
									<p>
										Roo&apos;s Modes keep models focused on a given task and limit their access to
										tools which are relevant to their role, keeping the context window clearer and
										avoiding surprises.
									</p>
									<p>
										Modes are even smart enough to ask to switch to another when stepping outside
										their responsibilities.
									</p>
								</div>
								<div className="mt-6">
									<span className="text-muted-foreground text-sm">Some examples</span>
									<ul className="flex gap-2 flex-wrap mt-2">
										{MODE_EXAMPLES.map((mode) => {
											const Icon = mode.icon
											return (
												<li
													key={mode.name}
													className="rounded-lg border bg-border/40 w-full md:w-[30%] min-w-[200px] text-sm px-3 py-2 flex gap-1">
													<Icon className="text-muted-foreground size-4 shrink-0 mt-0.5" />
													<div>
														<p className="font-semibold">{mode.name}</p>
														<p className="text-muted-foreground text-xs">
															{mode.description}
														</p>
													</div>
												</li>
											)
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="relative col-span-4 h-full">
						<div className="rounded-2xl bg-card/40 dark:bg-card/60 backdrop-blur-xl outline outline-1 outline-fuchsia-500/30 dark:outline-fuchsia-400/30 hover:outline-2 hover:outline-fuchsia-500/50 dark:hover:outline-fuchsia-400/50 shadow-lg shadow-fuchsia-500/10 dark:shadow-fuchsia-400/10 p-8 h-full group transition-all hover:shadow-2xl hover:shadow-fuchsia-500/20 dark:hover:shadow-fuchsia-400/20 relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute -right-3 -top-5 bg-gradient-to-br from-fuchsia-500 to-pink-600 border-0 shadow-lg shadow-fuchsia-500/50 rounded-full p-3 transition-all group-hover:-top-4 group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-fuchsia-500/60">
								<Keyboard className="size-8 text-white shrink-0 mt-1" strokeWidth={1.5} />
							</div>
							<div>
								<h3 className="text-2xl font-bold mb-1">Highly configurable</h3>
								<h4 className="font-semibold text-lg">Make it fit your workflow.</h4>
								<div className="text-muted-foreground my-4 space-y-1">
									<p>
										Developer tools need to fit like gloves. Highly tweakable,
										keyboard-shortcut-heavy gloves.
									</p>
									<p>We made Roo thoughtfully configurable to fit your workflow as best it can.</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative col-span-4 h-full">
						<div className="rounded-2xl bg-card/40 dark:bg-card/60 backdrop-blur-xl outline outline-1 outline-cyan-500/30 dark:outline-cyan-400/30 hover:outline-2 hover:outline-cyan-500/50 dark:hover:outline-cyan-400/50 shadow-lg shadow-cyan-500/10 dark:shadow-cyan-400/10 p-8 h-full group transition-all hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute -right-3 -top-5 bg-gradient-to-br from-cyan-500 to-blue-600 border-0 shadow-lg shadow-cyan-500/50 rounded-full p-3 transition-all group-hover:-top-4 group-hover:-right-2 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-cyan-500/60">
								<Shield className="size-8 text-white shrink-0 mt-1" strokeWidth={1.5} />
							</div>
							<div>
								<h3 className="text-2xl font-bold mb-1">Secure and transparent</h3>
								<h4 className="font-semibold text-lg">Open source from the get go.</h4>
								<div className="text-muted-foreground my-4 space-y-1">
									<p>
										The Roo Code Extension is{" "}
										<Link target="_blank" href="https://github.com/RooCodeInc/Roo-Code">
											open source
										</Link>{" "}
										so you can see for yourself exactly what it&apos;s doing and we don&apos;t use
										your data for training.
									</p>
									<p>
										Plus we&apos;re fully SOC2 Type 2 compliant and follow industry-standard
										security practices.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
