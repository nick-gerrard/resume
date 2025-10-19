<script lang="ts">
	let {
		title,
		company,
		startDate,
		endDate,
		description,
		location
	}: {
		title: string;
		company: string;
		startDate: string;
		endDate?: string;
		description: string;
		location?: string;
	} = $props();
</script>

<div class=" mb-6 rounded-lg border-2 border-white bg-bg-surface text-center">
	<h3 class="text-3xl font-semibold text-text-base">{title}</h3>
	<p class="text-xl font-medium text-text-subtle">{company}</p>
	{#if location}
		{location}
	{/if}
	<p class="mb-2 text-sm text-text-muted">{startDate} - {endDate ?? 'Present'}</p>
	<div class="text-text-muted">
		{description}
	</div>
</div>
