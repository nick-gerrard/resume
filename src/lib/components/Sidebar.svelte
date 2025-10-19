<script>
	let { open: boolean } = $props();
</script>

<aside class="absolute h-full w-full border-r-2 bg-gray-200 shadow-lg {open}">
	<nav class="p-12 text-xl">
		<a class="block" href="#about">About</a>
		<a class="block" href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
