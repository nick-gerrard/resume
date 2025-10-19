<script lang="ts">
	import SectionBox from '$lib/components/SectionBox.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import type { NavItem } from '$lib/components/FloatingNav.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import ExperienceComponent from '$lib/components/ExperienceComponent.svelte';
	import experienceData from '$lib/data/experience.json';
	import { animateOnScroll } from '$lib/actions/animateOnScroll';

	const NavItems: NavItem[] = [
		{ id: 'intro', label: 'intro' },
		{ id: 'experience', label: 'experience' },
		{ id: 'skills', label: 'skills' },
		{ id: 'projects', label: 'projects' },
		{ id: 'contact', label: 'contact me' }
	];
</script>

<svelte:head>
	<title>Nick Gerrard - Software Engineer</title>
	<meta name="description" content="My professional resume and portfolio" />
</svelte:head>

<div
	class="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-bg-base/90 text-text-base"
>
	<SectionBox>
		<section
			id="intro"
			class="flex h-screen snap-start flex-col overflow-hidden p-8 md:flex-row md:items-center md:p-12"
		>
			<div class="md: mb-4 mb-8 items-center justify-center md:w-1/3 md:pr-8">
				<h1 class="text-color-base mb-2 text-4xl font-bold md:text-5xl">Nick Gerrard</h1>
				<p class="text-color-base text-xl">AI/ML Engineer</p>
			</div>
			<div class="flex flex-grow items-center justify-center md:w-2/3 md:pl-8">
				<FloatingNav sections={NavItems}></FloatingNav>
			</div>
		</section>
	</SectionBox>
	<SectionBox>
		<section
			id="experience"
			class="grid h-screen snap-start grid-cols-1 gap-8 overflow-hidden p-8 md:grid-cols-3 md:p-12"
		>
			<div class="h-full space-y-16 overflow-y-auto pr-4 md:col-span-2">
				{#each experienceData as job, i}
					<div class="flex" class:justify-start={i % 2 !== 0} class:justify-end={i % 2 === 0}>
						<div class="w-full md:w-10/12 lg:w-8/12">
							<ExperienceComponent
								title={job.title}
								company={job.company}
								startDate={job.startDate}
								endDate={job.endDate ?? undefined}
								description={job.description}
								location={job.location ?? undefined}
							/>
						</div>
					</div>
				{/each}
			</div>

			<div
				class="sticky top-0 hidden h-screen items-center justify-center md:col-span-1 md:col-start-3 md:flex"
			>
				<div class="flex h-full items-center justify-center">
					<SectionTitle title="Experience" />
				</div>
			</div>
			<div class="mt-4 flex justify-center md:hidden">
				<SectionTitle title="Experience" />
			</div>
		</section>
	</SectionBox>
	<SectionBox>
		<section
			id="skills"
			class="flex h-screen snap-start flex-col overflow-hidden p-8 md:flex-row md:items-center md:p-12"
		>
			<div class="md:w-1/3 md:pr-8">
				<SectionTitle title="Skills" />
			</div>
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pl-8">Skills go here</div>
		</section>
	</SectionBox>
	<SectionBox>
		<section
			id="projects"
			class="flex h-screen snap-start flex-col overflow-hidden p-8 md:flex-row-reverse md:items-center md:p-12"
		>
			<div class="md:w-1/3 md:pl-8">
				<SectionTitle title="Projects" />
			</div>
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pr-8">Projects go here...</div>
		</section>
	</SectionBox>
	<SectionBox>
		<section
			id="contact"
			class="flex h-screen snap-start flex-col overflow-hidden p-8 md:flex-row md:items-center md:p-12"
		>
			<div class="md:w-1/3 md:pr-8">
				<SectionTitle title="Contact Me" />
			</div>
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pl-8">Contact me here</div>
		</section>
	</SectionBox>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(body) {
		@apply bg-gray-50;
	}
</style>
