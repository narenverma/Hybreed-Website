import React from 'react'

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

export default function OnScrollContentAnimation() {

  document.querySelectorAll(".section-head, .hero-head ").forEach((textItem) => {

    const target = textItem
    Splitting({ target: target, by: 'words', whitespace: true });

  })



  function scrollAnimate(actionElem, classAct, posVal) {
    if (posVal === undefined) {
      posVal = '0% 0% -10% 0%'
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classAct);
        } else {
          entry.target.classList.remove(classAct);
        }
      }
      );
    }
      , {
        rootMargin: posVal
      });
    const hiddenElements = document.querySelectorAll(actionElem);
    hiddenElements.forEach((el) => observer.observe(el));
  }
  scrollAnimate(".hero-head", "show-head", '0% 0%  0% 0%')
  scrollAnimate(".section-head", "show-head")


}
