"use strict";
// ==========================
// laxxx.js
// ==========================
lax.setup(); // init

const updateLax = () => {
  lax.update(window.scrollY);
  window.requestAnimationFrame(updateLax);
};

window.requestAnimationFrame(updateLax);

// ==========================
// smooth scroll
// ==========================
const scroll = new SmoothScroll('a[href*="#"]');

// ==========================
// glider.js
// ==========================
let projectGliders = document.querySelectorAll(".projectGlider");

for (let i = 0; i < projectGliders.length; i++) {
  let glider = new Glider(projectGliders[i], {
    slidesToShow: 1,
    dots: `#dots${i}`,
    draggable: true,
    arrows: {
      prev: `.glider-prev-${i}`,
      next: `.glider-next-${i}`
    },
    rewind: true
  });

  glider.refresh(true);
}

// ==========================
// Scroll functions
// ==========================
let prevScrollpos = window.pageYOffset;

// Hide or show navbar
function showNavbar() {
  if (document.body.scrollTop < 50) {
    return (document.querySelector(".navbar").style.top = "0");
  }

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
}

// Scroll to top button
function showScrollToTopBtn() {
  let scrollToTopBtn = document.getElementById("toTopButton");

  if (document.body.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.onscroll = function() {
  showNavbar();
  showScrollToTopBtn();
};

// ==========================
// Image data
// ==========================
const imgData = {
  airKoalaty: [
    {
      src: "./images/projects/air-koalaty-report/air-p1-compressed.jpg",
      alt: "Air KOALAty Report landing page"
    },
    {
      src: "./images/projects/air-koalaty-report/air-p2-compressed.jpg",
      alt: "Air KOALAty Report google autocomplete places"
    },
    {
      src: "./images/projects/air-koalaty-report/air-p3-compressed.jpg",
      alt: "Air KOALAty Report login with AuthO"
    },
    {
      src: "./images/projects/air-koalaty-report/air-p4-compressed.jpg",
      alt: "Air KOALAty Report list page"
    }
  ],
  pokeSurvey: [
    {
      src: "./images/projects/poke-survey/poke-survey-p1-compressed.jpg",
      alt: "Poke-Survey landing page"
    },
    {
      src: "./images/projects/poke-survey/poke-survey-p2-compressed.jpg",
      alt: "Poke-Survey vote page"
    },
    {
      src: "./images/projects/poke-survey/poke-survey-p3-compressed.jpg",
      alt: "Poke-Survey results page"
    },
    {
      src: "./images/projects/poke-survey/poke-survey-p4-compressed.jpg",
      alt: "Poke-Survey contact page"
    }
  ],
  portfolioV1: [
    {
      src: "./images/projects/portfolio-v1/portfolio-p1-compressed.jpg",
      alt: "Portfolio v1 landing page"
    },
    {
      src: "./images/projects/portfolio-v1/portfolio-p2-compressed.jpg",
      alt: "Portfolio v1 contact form"
    },
    {
      src: "./images/projects/portfolio-v1/portfolio-p3-compressed.jpg",
      alt: "Portfolio v1 unit tests"
    },
    {
      src: "./images/projects/portfolio-v1/portfolio-p4-compressed.jpg",
      alt: "Portfolio v1 cypress tests"
    }
  ],
  shareFamilyRecipes: [
    {
      src: "./images/projects/share-family-recipes/sfr-p1-compressed.jpg",
      alt: "Share family recipes landing page with search bar"
    },
    {
      src: "./images/projects/share-family-recipes/sfr-p2-compressed.jpg",
      alt: "Share family recipes list of recipes"
    },
    {
      src: "./images/projects/share-family-recipes/sfr-p3-compressed.jpg",
      alt: "Share family recipes figma design"
    },
    {
      src: "./images/projects/share-family-recipes/sfr-p4-compressed.jpg",
      alt: "Share family recipes unit, end-to-end, and back end tests"
    }
  ]
};

// ==========================
// Modal
// ==========================
let modal = document.getElementById("imgModal");
function openModal(groupName) {
  // Get modal images
  let modalImages = document.querySelectorAll(".modalImage");

  // assign src and alt to modal images
  for (let i = 0; i < modalImages.length; i++) {
    modalImages[i].src = imgData[groupName][i].src;
    modalImages[i].alt = imgData[groupName][i].alt;
  }

  // show modal
  modal.style.display = "block";

  // initialize glider.js
  let glider = new Glider(document.querySelector(".gliderModal"), {
    slidesToShow: 1,
    dots: "#dots-modal",
    draggable: true,
    arrows: {
      prev: ".glider-prev-modal",
      next: ".glider-next-modal"
    },
    rewind: true
  });

  glider.refresh(true);
}

document
  .getElementById("closeModalBtn")
  .addEventListener("click", () => (modal.style.display = "none"));
