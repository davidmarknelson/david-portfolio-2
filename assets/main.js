"use strict";
// ==========================
// laxxx.js
// ==========================
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
    lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

// ==========================
// glider.js
// ==========================
window.addEventListener("load", function(){
  let projectGliders = document.querySelectorAll(".projectGlider");

  for (let i = 0; i < projectGliders.length; i++) {
    new Glider(projectGliders[i], {
      slidesToShow: 1,
      dots: `#dots${i}`,
      draggable: true,
      arrows: {
        prev: `.glider-prev-${i}`,
        next: `.glider-next-${i}`
      },
      rewind: true
    });
  }

});

// ==========================
// smooth-scroll
// ==========================
let scroll = new SmoothScroll("a[href*='#']", {
  speed: 500
});

// ==========================
// Scroll functions
// ==========================
let prevScrollpos = window.pageYOffset;
let scrollToTopBtn = document.getElementById("toTopButton");

// Hide or show navbar
function showNavbar() {
  if (document.body.scrollTop < 50) {
    return document.querySelector(".navbar").style.top = "0";
  }

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top ="-5rem";
  }
  prevScrollpos = currentScrollPos;
}

// Scroll to top button
function showScrollBtn() {
  if (document.body.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.onscroll = function() {
  showNavbar();
  showScrollBtn();
}

// ==========================
// Image data
// ==========================
const imgData = {
  airKoalaty: [
    {
      src: "./images/projects/air-koalaty-report/air-p1.jpeg",
      alt: "Air KOALAty Report landing page"
    },
    {
      src: "./images/projects/air-koalaty-report/air-p2.jpeg",
      alt: "Air KOALAty Report google autocomplete places"
    },
    {
      src: "./images/projects/air-koalaty-report/air-p3.jpeg",
      alt: "Air KOALAty Report login with AuthO"
    },
    {
      src: "./images/projects/air-koalaty-report/air-p4.jpeg",
      alt: "Air KOALAty Report list page"
    },
  ],
  pokeSurvey: [
    {
      src: "./images/projects/poke-survey/poke-survey-p1.jpeg", 
      alt: "Poke-Survey landing page"
    },
    {
      src: "./images/projects/poke-survey/poke-survey-p2.jpeg", 
      alt: "Poke-Survey vote page"
    },
    {
      src: "./images/projects/poke-survey/poke-survey-p3.jpeg", 
      alt: "Poke-Survey results page"
    },
    {
      src: "./images/projects/poke-survey/poke-survey-p4.jpeg", 
      alt: "Poke-Survey contact page"
    }
  ],
  portfolioV1: [
    {
      src: "./images/projects/portfolio-v1/portfolio-p1.jpg", 
      alt: "Portfolio v1 landing page"
    },
    {
      src: "./images/projects/portfolio-v1/portfolio-p2.jpg", 
      alt: "Portfolio v1 contact form"
    }, 
    {
      src: "./images/projects/portfolio-v1/portfolio-p3.jpeg", 
      alt: "Portfolio v1 unit tests"
    },
    {
      src: "./images/projects/portfolio-v1/portfolio-p4.jpeg", 
      alt: "Portfolio v1 cypress tests"
    }
  ],
  shareFamilyRecipes: [
    {
      src: "./images/projects/share-family-recipes/sfr-p1.jpg", 
      alt: "Share family recipes landing page with search bar"
    }, 
    {
      src: "./images/projects/share-family-recipes/sfr-p2.jpg", 
      alt: "Share family recipes list of recipes"
    }, 
    {
      src: "./images/projects/share-family-recipes/sfr-p3.jpg", 
      alt: "Share family recipes figma design"
    }, 
    {
      src: "./images/projects/share-family-recipes/sfr-p4.jpg", 
      alt: "Share family recipes unit, end-to-end, and back end tests"
    }
  ]
};

// ==========================
// Modal
// ==========================

// Get the modal
let modal = document.getElementById("imgModal");
// Get modal images
let modalImages = document.querySelectorAll(".modalImage");

// Close the modal
document.addEventListener("click", function(e) {
  if (e.target.matches(".modal__close") || e.target.matches(".modal")) {
    modal.style.display = "none";
  }
})

function openModal(groupName) {
  // assign src and alt to modal images
  for (let i = 0; i < modalImages.length; i++) {
    modalImages[i].src = imgData[groupName][i].src;
    modalImages[i].alt = imgData[groupName][i].alt;
  }

  // show modal
  modal.style.display = "block";

  // initialize glider.js
  new Glider(document.querySelector(".gliderModal"), {
    slidesToShow: 1,
    dots: "#dots-modal",
    draggable: true,
    arrows: {
      prev: ".glider-prev-modal",
      next: ".glider-next-modal"
    },
    rewind: true
  });
}