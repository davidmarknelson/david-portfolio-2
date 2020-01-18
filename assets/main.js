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
window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    rewind: true
  })
})

// ==========================
// smooth-scroll
// ==========================
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500
});

// ==========================
// hide navbar on scroll
// ==========================
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top ="-5rem";
  }
  prevScrollpos = currentScrollPos;
} 

// ==========================
// Modal
// ==========================

// Get the modal
let modal = document.getElementById("imgModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "./images/projects/air_koalaty_report/air-p1.jpeg";
  // modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  event.stopPropagation()
  modal.style.display = "none";
}

modal.onclick = function() {
  event.stopPropagation()
  modal.style.display = "none";
}
modalImg.onclick = function() {
  event.stopPropagation()
}