"use strict";

const skillItem = document.querySelectorAll(".skills__item");
const skillDesc = document.querySelectorAll(".skills__desc");

// skills 섹션 탭메뉴
// innerWidth 1200px 이하에서 열릴 때만 실행
function skillTabFunc() {
  if (window.innerWidth < 1200) {
    for (let i = 0; i < skillItem.length; i++) {
      if (i < 4) {
        skillItem[i].addEventListener("click", () => {
          for (let i = 0; i < 4; i++) {
            skillItem[i].classList.remove("active");
            skillDesc[i].classList.remove("open");
          }
          skillItem[i].classList.add("active");
          skillDesc[i].classList.add("open");
        });
      } else {
        skillItem[i].addEventListener("click", () => {
          for (let i = 4; i < skillItem.length; i++) {
            skillItem[i].classList.remove("active");
            skillDesc[i].classList.remove("open");
          }
          skillItem[i].classList.add("active");
          skillDesc[i].classList.add("open");
        });
      }
    }
  }
}

skillTabFunc();

// 포트폴리오 섹션 Swiper 설정
const portfolios = new Swiper(".portfolio-slider", {
  direction: "horizontal",
  loop: true,
  speed: 600,
  slidesPerView: 1,
  loop: true,
  loopedSlides: 6,
  navigation: {
    prevEl: ".portfolio-slider__controls--prev",
    nextEl: ".portfolio-slider__controls--next",
  },
});

// 포트폴리오 썸네일 Swiper
const thumbnails = new Swiper(".portfolio-thumbnails", {
  slidesPerView: "4",
  spaceBetween: 5,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  touchRatio: 0,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: "6",
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: "4",
    },
    1400: {
      slidesPerView: "5",
    },
    1700: {
      slidesPerView: "6",
      spaceBetween: 0,
    },
  },
});
portfolios.controller.control = thumbnails;
thumbnails.controller.control = portfolios;

// 엘리먼트 위치 확인
function checkElementLocation(elem, triggerDiff) {
  const elFromTop = elem.getBoundingClientRect().top;
  return elFromTop > window.innerHeight + (triggerDiff || 0);
}

//윈도우 스크롤 이벤트 핸들러
function handleScroll() {
  const elToLeft = document.querySelectorAll(".scroll-left");
  const elToRight = document.querySelectorAll(".scroll-right");
  const triggerPoint = window.innerHeight / 2;

  elToLeft.forEach((el) => {
    if (checkElementLocation(el, -triggerPoint)) {
      el.style.opacity = "0";
      el.style.transform = "translateX(100px)";
    } else {
      el.style.opacity = "1";
      el.style.transform = "translateX(0px)";
    }
  });

  elToRight.forEach((el) => {
    if (checkElementLocation(el, -triggerPoint)) {
      el.style.opacity = "0";
      el.style.transform = "translateX(-100px)";
    } else {
      el.style.opacity = "1";
      el.style.transform = "translateX(0px)";
    }
  });
}

// 윈도우 스크롤이벤트
window.addEventListener("scroll", handleScroll);

// 윈도우 사이즈 변경시 함수 재실행
window.addEventListener("resize", skillTabFunc);
