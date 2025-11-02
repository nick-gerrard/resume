<script lang="ts">
	import SectionBox from '$lib/components/SectionBox.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import type { NavItem } from '$lib/components/FloatingNav.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import ExperienceComponent from '$lib/components/ExperienceComponent.svelte';
	import SkillsComponent from '$lib/components/SkillsComponent.svelte';
	import ProjectComponent from '$lib/components/ProjectComponent.svelte';
	import experienceData from '$lib/data/experience.json';
	// import type { Project, Skill } from '$lib/types';
	import projectData from '$lib/data/projects.json';
	import skillsData from '$lib/data/skills.json';

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
			<div class="md: mb-8 items-center justify-center md:w-1/3 md:pr-8">
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
				<div
					class="align-center m-8 justify-center rounded-md border-2 border-border-emphasis p-8 text-center"
				>
					I have a wide variety of skills cultivated over years of development experience, including
					frontend frameworks like Angular and Svelte, backends like flask and fastAPI. I've also
					spent time working in the AWS ecosystem, so I'm prepared for everything from prototyping
					to final deployment.
				</div>
			</div>
			<div class="grid h-1/2 grid-cols-4 items-center overflow-y-auto md:w-2/3 md:pl-8">
				{#each skillsData as skill}
					<SkillsComponent {skill} />
				{/each}
			</div>
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
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pr-8">
				{#each projectData as proj, i}
					<div class="flex" class:justify-start={i % 2 !== 0} class:justify-end={i % 2 === 0}>
						<div class="w-full md:w-10/12 lg:w-8/12">
							<ProjectComponent project={proj} />
						</div>
					</div>
				{/each}
			</div>
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
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pl-8">
				<div
					class="h-1/2 justify-center rounded-md border-2 border-border-emphasis text-center align-middle text-xl"
				>
					You can find all of my important contact links below:

					<p class="p-4"><a href="https://linkedin.com">LinkedIN</a></p>
					<p class="p-4"><a href="https://github.com/nick-gerrard">GitHub</a></p>
					<p class="p-4"><a href="mailto:nick.gerrard16@gmail.com">Gmail</a></p>

					Feel free to reach out for any of your frontend development needs!
				</div>
			</div>
		</section>
	</SectionBox>
	<SectionBox>
		<section
			id="test"
			class="flex h-screen snap-start flex-col overflow-hidden p-8 md:flex-row-reverse md:items-center md:p-12"
		>
			<div class="md:w-1/3 md:pl-8">
				<SectionTitle title="Test" />
			</div>
			<div class="h-full flex-grow overflow-y-auto md:w-2/3 md:pr-8"></div>
		</section>
	</SectionBox>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(body) {
		@apply bg-gray-50;
	}
</style>
