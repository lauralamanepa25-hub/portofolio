// Animasi saat scroll menggunakan Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Amati semua elemen dengan class 'animate'
  document.querySelectorAll(".animate").forEach((el) => {
    observer.observe(el);
  });

  // Smooth scrolling untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Header shadow saat scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
      header.style.boxShadow = "none";
    }
  });
});
