 
import React, {useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

import LocomotiveScroll from 'locomotive-scroll';

const SmoothScroller =()=>{


const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp:0.06,
  multiplier:0.7,
  firefoxMultiplier:0.7,
});
scroller.destroy();
scroller.init();
scroller.start();
scroller.update(); 
return scroller;


}

const ScrollTriggerConf =()=>{
  
  let scroll =SmoothScroller()

  const getScroller = document.querySelector('[data-scroll-container]')
    scroll.on("scroll", ScrollTrigger.update);
    
    gsap.registerPlugin(ScrollTrigger  ); 
    
    ScrollTrigger.scrollerProxy(getScroller, {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

      
  window.addEventListener("load", function(event) {
    ScrollTrigger.refresh();
  });


  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();
}

export  {ScrollTriggerConf, SmoothScroller};