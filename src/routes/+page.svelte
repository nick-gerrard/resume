<script lang="ts">
	import SectionBox from '$lib/components/SectionBox.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import type { NavItem } from '$lib/components/FloatingNav.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import ExperienceComponent from '$lib/components/ExperienceComponent.svelte';
	import experienceData from '$lib/data/experience.json';

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

<div class="relative grid min-h-screen grid-cols-1 bg-bg-base/90 text-text-base">
	<SectionBox>
		<section
			id="intro"
			class="flex flex-col overflow-hidden p-8 md:flex-row md:items-center md:p-12"
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
			class="flex flex-col overflow-hidden p-8 md:flex-row-reverse md:items-center md:p-12"
		>
			<div class="md:w-1/3 md:pl-8">
				<SectionTitle title="Experience" />
			</div>
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pr-8">
				{#each experienceData as job}
					<ExperienceComponent
						title={job.title}
						company={job.company}
						startDate={job.startDate}
						endDate={job.endDate ?? undefined}
						description={job.description}
						location={job.location ?? undefined}
					/>
				{/each}
			</div>
		</section>
	</SectionBox>
	<SectionBox>
		<section
			id="skills"
			class="flex flex-col overflow-hidden p-8 md:flex-row md:items-center md:p-12"
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
			class="flex flex-col overflow-hidden p-8 md:flex-row-reverse md:items-center md:p-12"
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
			class="flex flex-col overflow-hidden p-8 md:flex-row md:items-center md:p-12"
		>
			<div class="md:w-1/3 md:pr-8">
				<SectionTitle title="Contact Me" />
			</div>
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pl-8">Contact me here</div>
		</section>
	</SectionBox>
	<svg
		class="pointer-events-none absolute top-0 left-0 h-full w-full"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line x1="50" y1="50" x2="200" y2="200" stroke="var(--color-primary)" stroke-width="2" />
	</svg>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(body) {
		@apply bg-gray-50;
	}
</style>
