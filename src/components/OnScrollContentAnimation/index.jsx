import React from 'react'

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

export default function OnScrollContentAnimation() {

  document.querySelectorAll(".section-head, .hero-head ").forEach((textItem) => {

    const target = textItem
    Splitting({ target: target, by: 'words', whitespace: true });

  })
  document.querySelectorAll(".para-reveal-wrap p ").forEach((textItem) => {

    const target = textItem 
    const results = Splitting({ target: target, by: "chars" });
  })


  // scrollAnimate(".hero-head", "show-head", '0% 0%  0% 0%')
  scrollAnimate(".section-head", "show-head")
  scrollAnimate(".scroll-anim-card", "active-card", '0% 0%  -40% 0%')
  scrollAnimate(".anim-right-box", "active-anim", '0% 0%  -20% 0%')
  scrollAnimate(".anim-left-box", "active-anim", '0% 0%  -20% 0%')
  scrollAnimate(".anim-bottom-box", "active-anim", '0% 0%  -20% 0%')


}

export const scrollAnimate = (actionElem, classAct, posVal)=> {
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