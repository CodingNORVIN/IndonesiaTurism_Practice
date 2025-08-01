// social media icons red on hover

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

// red circle animation on scroll up

const redCircle = document.querySelector('.red-circle');

redCircle.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});
