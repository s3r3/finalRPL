document.addEventListener("DOMContentLoaded", function () {
  // Aktifkan ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animasi untuk navbar
  gsap.from(".bg-white", {
    duration: 1,
    opacity: 0,
    y: -10,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".bg-white",
      start: "top top",

      toggleActions: "play none none restart",
    },
  });

  gsap.from(".fa-bars", {
    duration: 1,
    opacity: 0,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 0.1,
    scrollTrigger: {
      trigger: ".fa-bars",
      start: "top top",

      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".logo", {
    duration: 1,
    opacity: 0,
    x: -200,
    ease: "back.out(1.7)",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".logo",
      start: "top top",

      toggleActions: "play none none restart",
    },
  });

 

  gsap.from(".search-container", {
    duration: 1,
    opacity: 0,
    x: 200,
    ease: "back.out(1.7)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".search-container",
      start: "top top",

      toggleActions: "play none none restart",
    },
  });

  gsap.from(".menu-item", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    stagger: { amount: 0.2 },
    ease: "back.out(1.7)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".menu-item",
      start: "top top",

      toggleActions: "play none none restart",
    },
  });

  // Animasi untuk hero section
  gsap.from(".hero-text-1", {
    duration: 1.5,
    opacity: 0,
    y: -100,
    ease: "bounce.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".hero-text-1",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".hero-text-2", {
    duration: 1.5,
    opacity: 0,
    y: 100,
    scale: 1.2,
    ease: "elastic.out(1, 0.5)",
    delay: 0.6,
  });

  gsap.from(".order-button", {
    duration: 1.2,
    opacity: 0,
    x: -50,
    ease: "back.out(4)",
    delay: 0.7,
    scrollTrigger: {
      trigger: ".order-button",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".roast-chicken", {
    duration: 1.2,
    opacity: 0,
    x: 50,
    ease: "elastic.out(1, 0.5)",
    delay: 0.8,
    scrollTrigger: {
      trigger: ".roast-chicken",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".chilli-1", {
    duration: 1.2,
    opacity: 0,
    x: -50,
    ease: "back.out(4)",
    delay: 0.9,
    scrollTrigger: {
      trigger: ".chilli-1",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".chilli-2", {
    duration: 1.2,
    opacity: 0,
    x: 50,
    ease: "elastic.out(1, 0.5)",
    delay: 1.0,
    scrollTrigger: {
      trigger: ".chilli-2",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Animasi untuk kategori khusus
  gsap.from(".categories-section h2", {
    duration: 1.2,
    opacity: 0,
    y: 50,
    ease: "back.out(1)",
    scrollTrigger: {
      trigger: ".categories-section h2",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".category-card", {
    duration: 1,

    scale: 0.8,
    stagger: { amount: 0.3 },
    ease: "bounce.in(1.7)",
    scrollTrigger: {
      trigger: ".category-card",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  // ... existing animations ...

  // Daily Best Sells Section Animations
  gsap.from(".daily-best-title", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".animate-section",
      start: "top 80%",
    },
  });

  gsap.from(".filter-btn", {
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.1,
    ease: "back.out(4)",
    scrollTrigger: {
      trigger: ".filter-buttons",
      start: "top 80%",
    },
  });

  gsap.from(".product-card", {
    duration: 1,

    y: 50,
    rotation: 5,
    stagger: {
      amount: 0.4,
      from: "end",
    },
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".product-cards-container",
      start: "top 80%",
    },
  });
  // Animasi untuk hero section
  gsap.from(".animate-navigasi > div", {
    duration: 1.2,
    opacity: 0,
    y: -100,
    ease: "bounce.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".animate-navigasi",
      start: "top 50%",
      toggleActions: "play none none start",
    },
  });
  gsap.from(".animate-card ", {
  duration: 1,
  opacity: 0,
  x: -200,
  ease: "back.out(1.7)",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".animate-card",
    start: "top 80%",
    toggleActions: "play none none start",
  },
});



  // Hover effects
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.03,
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
        duration: 0.3,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)",
        duration: 0.3,
      });
    });
  });
});
