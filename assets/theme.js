document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("heroVideo");

  function handleScroll() {
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.015; // MUCH more subtle
    const scale = 1 + scrollY * 0.0002;

    if (video) {
      video.style.transform = `
        perspective(1200px)
        rotateY(${rotation}deg)
        scale(${scale})
      `;
    }
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("mousemove", function(e) {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  const x = (window.innerWidth / 2 - e.clientX) / 100;
  const y = (window.innerHeight / 2 - e.clientY) / 100;

  video.style.transform += ` rotateX(${y}deg) rotateY(${x}deg)`;
});
