<script lang="ts">
	export interface NavItem {
		label: string;
		id: string;
	}
	let { sections }: { sections: NavItem[] } = $props();
</script>

<nav class="">
	<ul>
		{#each sections as section}
			<li class="mb-10 last:mb-0">
				<a
					href="#{section.id}"
					class="pd-10 radius-4xl mb-10 block w-80 rounded-full bg-primary px-4 py-2 text-center text-4xl text-on-primary shadow-sm transition-colors duration-200 ease-in-out hover:bg-secondary hover:text-on-secondary hover:shadow-md"
				>
					{section.label.toUpperCase()}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	/* Optional: Add smooth scrolling via CSS */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
