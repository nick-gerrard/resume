// src/lib/actions/animateOnScroll.ts
export function animateOnScroll(node: HTMLElement, { threshold = 0.1, rootMargin = '0px', once = true } = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          if (once) {
            observer.unobserve(node); // Stop observing once visible
          }
        } else if (!once) {
          // Optional: Remove class if element scrolls out of view and 'once' is false
          node.classList.remove('visible');
        }
      });
    },
    {
      threshold,
      rootMargin
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
