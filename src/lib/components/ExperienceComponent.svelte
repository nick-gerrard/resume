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

<div class="mb-6">
	<h3 class="text-xl font-semibold">{title}</h3>
	<p class="font-medium text-gray-800">{company}</p>
	{#if location}
		{location}
	{/if}
	<p class="mb-2 text-sm text-gray-700">{startDate} - {endDate ?? 'Present'}</p>
	<div class="text-gray-700">
		{description}
	</div>
</div>
