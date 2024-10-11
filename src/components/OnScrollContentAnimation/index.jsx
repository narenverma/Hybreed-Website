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
  scrollAnimate(".section-head", "show-head", false, false, false)
  scrollAnimate(".scroll-anim-card", "active-card", '0% 0%  -40% 0%', false, true)
  scrollAnimate(".anim-right-box", "active-anim", '0% 0%  -20% 0%', false, true)
  scrollAnimate(".anim-left-box", "active-anim", '0% 0%  -20% 0%', false, true)
  scrollAnimate(".anim-bottom-box", "active-anim", '0% 0%  -20% 0%', false, true)


}

export const scrollAnimate = (actionElem, classAct, posVal, elemSet, runOnce)=> {
  if (posVal === false) {
    posVal = '0% 0% -10% 0%'
  }
  
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {

      let setTime = elemSet === false ? 0 : index * elemSet;
      let runOneTime;
      runOnce === true ?  runOneTime = !entry.target.classList.contains(classAct) : runOneTime = true;

      if (entry.isIntersecting && runOneTime ) {

        setTimeout(() => {          
          entry.target.classList.add(classAct);
        }, setTime);

      } else {
        if(runOnce === false) {
          entry.target.classList.remove(classAct)
        } 
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