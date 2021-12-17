"use strict";

const skillItem = document.querySelectorAll(".skills__item");
const skillDesc = document.querySelectorAll(".skills__desc");

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
