<script lang="ts">
	import type { Skill } from '$lib/types';
	let { skill }: { skill: Skill } = $props();
</script>

<div
	class="flex h-32 w-32 items-center justify-center rounded-full border-2 border-border-emphasis"
>
	<img
		class="max-h-11/16 max-w-11/16 object-contain"
		src={skill.logo_uri}
		alt="{skill.name} logo"
	/>
</div>
