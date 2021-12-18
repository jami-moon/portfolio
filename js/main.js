"use strict";

const skillItem = document.querySelectorAll(".skills__item");
const skillDesc = document.querySelectorAll(".skills__desc");

// skills 섹션 탭메뉴
// innerWidth 1200px 이하에서 열릴 때만 실행
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
