<script lang="ts">
	import { Popover } from 'melt/components';
	import type { Project } from '$lib/types';
	let { project }: { project: Project } = $props();
</script>

<div
	class="mb-6 flex h-32 w-64 items-center justify-center rounded-full border-2 border-white bg-bg-surface text-center align-bottom"
>
	<Popover>
		{#snippet children(popover)}
			<button class="align-bottom text-3xl font-semibold text-text-base" {...popover.trigger}
				>{project.name}</button
			>

			<div
				{...popover.content}
				class="w-96 rounded-lg border-2 border-accent-1 bg-secondary text-on-secondary"
			>
				<p class="text-3xl font-medium">{project.status}</p>
				<a href={project.link} class="text-lg">Check out {project.name} here!</a>
				<div class="text-text-emphasis">
					{project.description}
				</div>
			</div>
		{/snippet}
	</Popover>
</div>

<style lang="postcss">
	.input {
	}

	.trigger {
	}

	.close {
	}

	.content {
		border-radius: 8px;
		color: red;
		background-color: yellow;
	}
</style>
