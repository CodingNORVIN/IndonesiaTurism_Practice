document.addEventListener('DOMContentLoaded', () => {
	const icons = document.querySelectorAll('.footer-socials-icon');

	icons.forEach(img => {
		const originalSrc = img.getAttribute('src');
		const redSrc = originalSrc.replace('.png', '-red.png');

		img.addEventListener('mouseenter', () => {
			img.setAttribute('src', redSrc);
		});

		img.addEventListener('mouseleave', () => {
			img.setAttribute('src', originalSrc);
		});
	});
});
