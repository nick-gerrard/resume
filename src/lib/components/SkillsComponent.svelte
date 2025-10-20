<script lang="ts">
	import type { Skill } from '$lib/types';
	let { skill }: { skill: Skill } = $props();
</script>

<!-- 	class="justify-content flex h-32 w-32 items-center rounded-full border-2 border-border-emphasis" -->
<!-- > -->
<img
	class="border-border-emphases h-32 w-32 rounded-full border-2 pb-12"
	src={skill.logo_uri}
	alt="{skill.name} logo"
/>
<!-- <span>{skill.name}</span> -->
<!-- </div> -->
