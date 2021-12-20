"use strict";

const gnbTab = document.querySelectorAll(".gnb__item a");
const sections = document.querySelectorAll(".section");
const epSection = document.querySelector(".epilogue");
const skillItem = document.querySelectorAll(".skills__item");
const skillDesc = document.querySelectorAll(".skills__desc");

// 섹션 절대 위치 구하기
function getAbsoluteTop(el) {
  return window.pageYOffset + el.getBoundingClientRect().top;
}

// 엘리먼트 위치 확인
function checkElementLocation(el, triggerDiff) {
  const elFromTop = el.getBoundingClientRect().top;
  return elFromTop > window.innerHeight + (triggerDiff || 0);
}

// 현재 위치에 맞게 gnb 텍스트 색상 변경

function gnbScrollActive() {
  const triggerPoint = window.innerHeight / 4;

  sections.forEach((el, idx) => {
    if (!checkElementLocation(el, -triggerPoint)) {
      const gnbTarget = gnbTab[idx];

      gnbTab.forEach((el) => {
        el.classList.remove("active");
      });
      gnbTarget.classList.add("active");
    }
  });
}

// gnb 클릭시 텍스트 색상 변경 및 해당 위치로 스크롤
gnbTab.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionTarget = sections[idx];

    window.scrollTo(0, getAbsoluteTop(sectionTarget));
  });
});

// skills 섹션 탭메뉴 구현
// innerWidth 1200px 이하에서만 실행
function skillTabFunc() {
  skillItem.forEach((el, idx) => {
    if (idx < 4) {
      el.addEventListener("click", () => {
        for (let i = 0; i < 4; i++) {
          skillItem[i].classList.remove("active");
          skillDesc[i].classList.remove("open");
        }
        skillItem[idx].classList.add("active");
        skillDesc[idx].classList.add("open");
      });
    } else {
      el.addEventListener("click", () => {
        for (let i = 4; i < skillItem.length; i++) {
          skillItem[i].classList.remove("active");
          skillDesc[i].classList.remove("open");
        }
        skillItem[idx].classList.add("active");
        skillDesc[idx].classList.add("open");
      });
    }
  });
}

if (window.innerWidth < 1200) {
  skillTabFunc();
}

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

//섹션 스크롤 이벤트핸들러
function handleScroll() {
  const elToLeft = document.querySelectorAll(".scroll-left");
  const elToRight = document.querySelectorAll(".scroll-right");
  const triggerPoint = window.innerHeight / 4;

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

//에필로그 섹션 스크롤 이벤트핸들러
function epScrollOn() {
  if (!checkElementLocation(epSection)) {
    epSection.classList.add("ep-on");
  }
}

// 윈도우 스크롤이벤트
window.addEventListener("scroll", () => {
  gnbScrollActive();
  handleScroll();
  epScrollOn();
});

// 윈도우 사이즈 변경시 함수 재실행
window.addEventListener("resize", () => {
  if (window.innerWidth < 1200) {
    skillTabFunc();
  }
});

// 윈도우 로드 이벤트
window.addEventListener("load", () => {
  gnbScrollActive();
});
