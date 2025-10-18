<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="rounded-lg border border-border-subtle bg-bg-surface/25 p-6 shadow-md">
	{@render children()}
</div>

<style>
	/* Optional: Add specific styles for the box if needed */
	div {
		/* Example: Add minimum height or other constraints */
		min-height: 100px;
	}
</style>
