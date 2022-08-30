"use strict";

//////////////////////////////////

const PAGE_3_TIMING = 6000; // milliseconds

// cards:

const cardsBtnsContainer = document.querySelector(".cards-btns");

if (cardsBtnsContainer) {
  cardsBtnsContainer.addEventListener("click", function (e) {
    e.preventDefault();
    const btn = e.target.closest(".card-btn");
    if (!btn) return;
    const cardNum = btn.dataset.num;
    document
      .querySelectorAll(".card")
      .forEach((card) => card.classList.add("hidden"));
    document.querySelector(`.card-${cardNum}`).classList.remove("hidden");
  });

  cardsBtnsContainer.addEventListener("click", function (e) {
    e.preventDefault();
    const btn = e.target.closest(".card-btn");
    if (!btn) return;
    const cardNum = btn.dataset.num;
    document
      .querySelectorAll(".card-p4")
      .forEach((card) => card.classList.add("hidden-4"));
    document.querySelector(`.card-${cardNum}`).classList.remove("hidden-4");
  });
}

// slides:

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let curSlide = 0;

const goToSlide = function (goTo) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(goTo - i) * 100}%)`;
  });
};

goToSlide(curSlide);

const nextSlide = function () {
  curSlide++;
  curSlide = curSlide === slides.length ? 0 : curSlide;
  goToSlide(curSlide);
};

const prevSlide = function () {
  curSlide--;
  curSlide = curSlide === -1 ? slides.length - 1 : curSlide;
  goToSlide(curSlide);
};

if (slider) {
  slider.addEventListener("click", function (e) {
    const btn = e.target.closest(".slider__btn");
    if (btn && btn.classList[1].endsWith("right")) nextSlide();
    if (btn && btn.classList[1].endsWith("left")) prevSlide();
  });
}

const sliderBtns = document.querySelector(".slides-btns");

if (sliderBtns) {
  sliderBtns.addEventListener("click", function (e) {
    e.preventDefault();
    const btn = e.target.closest(".slide-btn");
    if (!btn) return;
    const goTo = btn.dataset.num;
    goToSlide(goTo);
  });
}

// const customOptionsArray = document.querySelectorAll(".custom-options");

// if (customOptionsArray) {
//   customOptionsArray.forEach((customOptions) => {
//     customOptions.addEventListener("click", function (e) {
//       const option = e.target.closest(".custom-option");
//       if (!option) return;
//       const value = option.dataset.value;
//       const select = option
//         .closest(".custom-select")
//         .querySelector(".form__select");
//       select.value = value;
//     });
//   });
// }

// const formBtn = document.querySelector(".form__btn");

// if (formBtn) {
//   formBtn.addEventListener("click", function (e) {
//     window.location.href = "./page-3.html";
//   });
// }

if (window.location.href.slice(-11) == "page-3.html") {
  setTimeout(function () {
    window.location.href = "./page-4.html";
  }, PAGE_3_TIMING);
}

const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", function () {
    console.log("form submitted");
    window.location.href = "./page-3.html";
  });
}

$(".slick-carousel").slick({

  responsive: [
    {
      breakpoint: 2000,
      settings: {
        dots:false,
        slidesToShow:3,
      
      }
    },
    {
      breakpoint: 950,
      settings: {
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});
