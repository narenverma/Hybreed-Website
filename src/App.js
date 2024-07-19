import { GlobalStyle, FloatingBtn } from "./assets/css/globalStyle";
import { GlobalColorsStyle } from "./assets/css/colorsLib";
import { Outlet, Link, useLocation } from "react-router-dom";
import HeaderNavigation from "./components/HeaderNavigation";
import Footer from "./components/FooterWrapper";
import React, { useEffect } from "react";
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from "gsap/all";
import { headerScrollHide, scrollHeader, TextRevealScroll } from "./utils/contants";
import { HoverLeave } from "./components/HoverInteract";



function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  const location = useLocation();

  useEffect(() => {
     
    HoverLeave(); 
  }, [location]);

  useEffect(() => {
    document.title = 'Hybreed.co | Web & Mobile UX UI Product Design Agency in Navi Mumbai';
    // const link = document.querySelector("link[rel='icon']");
    // link.href = "/hybreed-header.svg";


    // Smooth Scroll start
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({

      lerp: 0.05

    })

    // function raf(time) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    lenis.on('scroll', ScrollTrigger.update)
    // Smooth Scroll End


    scrollHeader('header')


   
    headerScrollHide();




  }, []);


  return (
    <>
      <GlobalStyle />
      <GlobalColorsStyle />

      <div className="cursor">
        <div className="cursor-move-inner"  >
          <div className="cursor-inner"></div>
        </div>
        <div className="cursor-move-outer">
          <div className="cursor-outer"></div>
        </div>
      </div>

      <div className="page-wrap" data-scroll-container>
        <header>
          <HeaderNavigation />
        </header>
        <main>

          <Outlet />
          {
            window.innerWidth > 992 &&

          <FloatingBtn>
            <Link className="lets-talk-cta" to="https://hybreed.co/contact">
              <img src={require("../src/assets/images/lets-talk-circle-with-text.svg").default} alt="Let's Talk" className="img-one" />
              <img src={require("../src/assets/images/phone-black-icon.svg").default} alt="Phone" className="img-two" />
            </Link>
          </FloatingBtn>
          }
        </main>
        <footer className="overflow-hidden">
          <Footer />
        </footer>
      </div>

    </>
  );
}

export default App;


