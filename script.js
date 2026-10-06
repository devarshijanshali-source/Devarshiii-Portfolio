document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const topButton = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    topButton.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelectorAll("#navMenu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});