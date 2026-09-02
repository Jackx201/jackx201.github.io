const bgOrbs = document.querySelectorAll('.bg-orb');

if (bgOrbs.length) {
  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('pointermove', (event) => {
    targetX = (event.clientX / window.innerWidth - 0.5) * 48;
    targetY = (event.clientY / window.innerHeight - 0.5) * 48;
  });

  const moveBackground = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    const scrollOffset = window.scrollY * 0.08;

    bgOrbs.forEach((orb) => {
      const depth = Number(orb.dataset.depth || 0.15);
      const x = currentX * depth;
      const y = currentY * depth + scrollOffset * depth;
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    requestAnimationFrame(moveBackground);
  };

  requestAnimationFrame(moveBackground);
}
