<script lang="ts">
	let { title }: { title: string } = $props();

	function typewriterAction(node: HTMLElement, { speed = 1 } = {}) {
		const originalText = title; // Use the prop directly
		let i = 0;
		let interval: ReturnType<typeof setInterval>;

		// Function to start the typing animation
		function startTyping() {
			node.textContent = ''; // Clear initially
			interval = setInterval(
				() => {
					node.textContent += originalText[i];
					i++;
					if (i >= originalText.length) {
						clearInterval(interval);
					}
				},
				1000 / (speed * 5)
			); // Adjust timing based on speed
		}

		// Set up Intersection Observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// If the element is intersecting (visible) and animation hasn't started
					if (entry.isIntersecting) {
						startTyping();
						observer.unobserve(node); // Stop observing once triggered
					}
				});
			},
			{
				threshold: 0.5 // Trigger when 50% of the element is visible
			}
		);

		// Start observing the node
		observer.observe(node);

		// Return a destroy function to clean up
		return {
			destroy() {
				clearInterval(interval); // Clear interval if component is destroyed mid-animation
				observer.disconnect(); // Stop observing
			}
		};
	}
</script>

<div class="shadow-4xl inline-block rounded-4xl bg-bg-overlay/25 p-4">
	<h2
		class="min-h-[1.2em] w-80 text-center font-mono text-2xl font-semibold text-text-overlay md:text-3xl"
		use:typewriterAction={{ speed: 2 }}
	>
		{title}
	</h2>
</div>

<style>
	/* Optional: Add min-height to prevent layout shift when text is cleared */
	h2 {
		min-height: 1.2em; /* Adjust based on font size */
	}
	h2::after {
		content: '>'; /* You can use '|', '▋', or other characters */
		display: inline-block; /* Make it behave like a character */
		margin-left: 2px; /* Small space after the text */
		opacity: 1;
		animation: blink 1s step-start infinite; /* Apply the animation */
	}

	/* Define the blinking animation */
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
