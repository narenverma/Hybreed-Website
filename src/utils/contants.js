import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }


export const marqueeHybreedList = [
    {
        itemCategory: 3,
        itemName: "HYBREED.CO",
    }
]

export const TextSplitSpans = ({ text }) => {
    const letters = text.split('');

    return (
        <>
            {letters.map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </>
    );
};


export const TextRevealScroll = (parentEl, childEl)=>{
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(()=>{

        ScrollTrigger.refresh();
        
        document.querySelectorAll(parentEl).forEach((paraElWrap) => {
            
            let paraSpans = [...paraElWrap.querySelectorAll(childEl)];
            
            // document.querySelectorAll(".para-reveal-wrapper").forEach((paraElWrapper) => {
                
                //     paraElWrapper.style.height = paraElWrapper.querySelector(".para-reveal-wrap").offsetHeight * 3.5 + "px";
                // })
                
                gsap.to(paraSpans, {
                    
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: paraElWrap,
                        start: "top " + window.innerHeight / 2,
                        end: () => "+=" + paraElWrap.offsetHeight,
                        // pin: true,
                        scrub: 0.75,
                        // markers: true,
                    }
                    
                }, 0.4);
                
            })


    }, 500);
// setTimeout(()=>{
//     ScrollTrigger.refresh();
//     // console.log("MOla")
// }, 300)
}
// TextRevealScroll(".para-reveal-wrap" , " p span")

export function SectionTopSpace() {

    let headerH = document.querySelector("header").offsetHeight;

    document.querySelector("main .hero-section").style.height = "auto";
    document.querySelector("main .hero-section").style.paddingTop = (headerH - 24) + "px";

}


export const scrollHeader = (element) => {
    document.addEventListener("scroll", () => {
        let getElem = document.querySelector(element)
        //  console.log(getElem)
        if (window.scrollY > 30) {
            getElem.classList.add("headerActive")
        } else {
            getElem.classList.remove("headerActive")
        }

    })
}




export const MarqueeDuplicateAndTime = (marqueeWrap, marqueeList, loopVal) => {

    let getCloneWrapper = document.querySelectorAll(marqueeWrap);
    getCloneWrapper.forEach((getCloneWrap) => {



        getCloneWrap.querySelectorAll(marqueeList).forEach((item) => {
            let cloneList = item.cloneNode(true)
            // console.log(cloneList );

            // for(let i=0; i<=loopVal; i++){

            //     getCloneWrap.append(cloneList) 
            // }


            let getListOfSlide = getCloneWrap.querySelectorAll(marqueeList).length,
                getFirstSlideW = getCloneWrap.offsetWidth;

            // let  sumSize = 0;

            // getCloneWrap.querySelectorAll(marqueeList).forEach((item) => {
            //         // widthList.push(item.offsetWidth); 
            //         sumSize += item.offsetWidth  
            // })


            getCloneWrap.style.animationDuration = getFirstSlideW / (getListOfSlide + 100) + "s";
            // getCloneWrap.style.animationDuration = (getListOfSlide * (getFirstSlideW / 100) - 10) + "s";




        })
    })
}




export const LoaderFunction = () => {


    function onReady() {
        let getPillThumbs = document.querySelector(".pill-thumbs-anim"),
            getThumbsLoader = document.querySelector(".hero-imgs"); 

        const setPageLoader = () => {
            // document.body.classList.remove("overflow-hidden")
            // window.scrollTo(0, 0);

            getThumbsLoader.style.position = "absolute";
            getThumbsLoader.style.top = getPillThumbs.getBoundingClientRect().top + window.scrollY + "px";
            getThumbsLoader.style.left = getPillThumbs.getBoundingClientRect().left + "px";
            getThumbsLoader.style.height = getPillThumbs.offsetHeight + "px";
            getThumbsLoader.style.width = getPillThumbs.offsetWidth + "px";
            getThumbsLoader.style.borderRadius = "4rem";
            getThumbsLoader.style.zIndex = 10; 


        } 



        let prevWidth = window.innerWidth;
        window.addEventListener('resize', function () {
            if (window.innerWidth !== prevWidth) {
                setPageLoader()
            }
        });


    }




    // const loaderTimer = () => {

    //     const LoaderWrap = document.querySelector("#loader");
    //     const loadingBar = document.querySelector("#bar");
    //     const percentText = document.querySelector("#percent");

    //     let load = 0;
    //     let timeOut = 90;

    //     let loadingVal = setInterval(() => {
    //         load = load + Math.floor(Math.random() * 5 + 1);
    //         if (load < 100) {
    //             percentText.textContent = load + "%";
    //             loadingBar.style.width = `${load}%`;

    //         } else {
    //             loadingBar.style.width = `100%`;
    //             percentText.textContent = "100%";

    //         }


    //         if (load > 100) {

    //             // console.log("Tombola")

    //             onReady();

    //             clearInterval(loadingVal);

    //         }
    //     }, timeOut);
    // }

    if (document.readyState !== "loading") {

        setTimeout(() => {
            // loaderTimer();

            
            onReady()

                MarqueeDuplicateAndTime('.carousel-wrap ', " div", 0)
                MarqueeDuplicateAndTime('.marquee-strip-list', " div", 0)
                MarqueeDuplicateAndTime('footer .slide-track', " div", 0)

            

        }, 1000)
        

    } else {
        setTimeout(() => {
            // document.addEventListener("DOMContentLoaded", loaderTimer);
        }, 1000)
         
    }

}


export const headerScrollHide = () => {

    let didScroll;
    let lastScrollT = 0;
    let delta = 5;
    let siteHeader = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScroll();
            didScroll = false;
        }
    }, 250);

    function hasScroll() {
        let scrollT = window.scrollY;
        if (Math.abs(lastScrollT - scrollT) <= delta) return;
        if (scrollT > lastScrollT && scrollT > siteHeader) {
            document.querySelector('header').style.transform = 'translateY(-100%)';
        } else {
            if (scrollT + window.innerHeight < document.documentElement.scrollHeight) {
                document.querySelector('header').style.transform = 'translateY(0%)';
            }
        }
        lastScrollT = scrollT;
    }

}



export const LoaderAnimation = () => {

    // var counter = document.querySelectorAll(".counter")

    // counter.forEach(function (el, index) {

    //     var start = counter[index].getAttribute('data-count-start')
    //     var end = counter[index].getAttribute('data-count-end')
    //     var speed = counter[index].getAttribute('data-speed')

    //     setInterval(function () {
    //         start++;
    //         if (start > end) {
    //             return false;
    //         }
    //         counter[index].innerText = start + "%";

    //     }, speed)
    // })


    gsap.to(".hero-para, .hero-pill-text", { opacity: 0 });
    gsap.to(" .hero-cta , .lets-talk-cta", {
        scale: 0,
    });
    gsap.to(".hero-head > span", {
        opacity: 0, 
    });

    // const width = window.innerWidth;
    // const height = window.innerHeight;
    // const aspectRatioVal = width / height;

    // gsap.to(".hero-imgs", {
    //     aspectRatio: aspectRatioVal,
    //     scale: window.innerWidth < 768 ? 4 : 14,
    //     transformOrigin: window.innerWidth < 768 ? "21% 73%" : "59% 45%",
    //     width: "157px",
    //     borderRadius: 0,
    //     zIndex: 11,
    // });

    gsap.to(".hero-imgs", {
        position: "fixed",
        height: (window.innerWidth < 768 ? window.innerHeight / 2 : window.innerHeight) + "px",
        width: window.innerWidth + "px",  
        left:0,
        top:"50%",
        yPercent: -50,
        borderRadius: 0,
        zIndex: 11,
    });
    gsap.to("header > div", { yPercent: -100, opacity: 0, });
    gsap.to(".grid-free-anim-carousel", { yPercent: 100, opacity: 0, });

    gsap.to(" body, html", {
        overflow: "hidden",
        height: "100vh"
    })

      gsap.to(" .pre-loader h4, .pre-loader h5 ", {
        opacity: 0,
        y:50,
      })


      if (document.readyState !== "loading") {
        
      gsap.to(" .pre-loader h5 ", {
        opacity: 1,
        y:0,
        delay:.5,
        stagger: .5,
      })
      gsap.to(" .pre-loader h4 ", {
        opacity: 1,
        y:0,
        delay:1,
      })


        const digit1 = document.querySelector(".digit-1");
      const digit2 = document.querySelector(".digit-2");
      const digit3 = document.querySelector(".digit-3");


      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          let newElem = document.createElement("span");
          newElem.className = "num";
          newElem.textContent = j;
          digit3.appendChild(newElem);
        }
      }

      const finalDigit = document.createElement("span");
      finalDigit.className = "num";
      finalDigit.textContent = "0";
      digit3.appendChild(finalDigit);

      function animation(digit, duration, delay = 1) {
        const numHeight = digit.querySelector(".num").clientHeight;
        const totalDistance =
          (digit.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(digit, {
          y: -totalDistance,
          duration: duration,
          delay: delay,
          ease: "power2.inOut",
        });
      }

      animation(digit3, 5);
      animation(digit2, 6);
      animation(digit1, 2, 5);



      gsap.to(".progress-bar", {
        width: "30%",
        duration: 2,
        ease: "power4.inOut",
        delay: 7,
      });

      gsap.to(".progress-bar", {
        width: "100%",
        opacity: 0,
        duration: 2,
        delay: 8.5,
        ease: "power3.inOut",
        // onComplete: () => {
        //   gsap.set(".pre-loader", {
        //     display: "none",
        //   });
        // },
      });


    gsap.to(".pre-loader h5, .pre-loader h4 ", {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
        delay: 8.5,
        onComplete: () => {
            gsap.set(".pre-loader", {
                display: "none",
            });
        },
    })

    gsap.to(".hero-imgs", { 

        boxShadow: "  0 0 20px 8px #0002",
        delay: 8.8,
    })

    gsap.to(".hero-imgs > img", {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.25,
        delay: 8.7,
        repeat: -1,
    });
    gsap.to(".hero-imgs  ", {
        background: `url(` + require("../assets/images/our-work-images-v2/4pcapital-work-banner.png") + `)
    center/cover no-repeat`,
        duration: 1,
        ease: "power4.inOut",
        delay: 9,
    });

    gsap.to(".loading-anim", {
        backgroundColor: "#0000",
        delay: 9,
    })

    //   gsap.to(".hero-head", { 
    //     scale: 1, 
    //     // transformOrigin:"50% 50%",
    //     duration: 3, 
    //     ease: "power4.inOut",
    //     delay: 11.5,    
    // });


    // gsap.to(".hero-imgs", {
    //     borderRadius: "10rem",
    //     scale: 1,
    //     duration: 1.4,
    //     ease: "power3.inOut",
    //     delay: 10.5,
    // });
    // gsap.to(".hero-imgs", {
    //     width: "231px",
    //     aspectRatio: "22 / 9",
    //     // transformOrigin: "57% 46%",
    //     zIndex: 11,
    //     duration: .5,
    //     ease: "power2.inOut",
    //     delay: 11,
    // });

setTimeout(()=>{

    let getPillThumbsHead = document.querySelector(".pill-thumbs-anim")
    gsap.to(".hero-imgs", {
     position : "absolute",
     top : getPillThumbsHead.getBoundingClientRect().top + window.scrollY + "px",
     left : getPillThumbsHead.getBoundingClientRect().left + "px",
     height : getPillThumbsHead.offsetHeight + "px",
     width : getPillThumbsHead.offsetWidth + "px",
     yPercent: 0,
     boxShadow: "  0 0 0px 0px #0000",
     borderRadius : "4rem",
     zIndex : 10,
     duration: 1.4,
        ease: "power3.inOut",
        // delay: 10.5,
    })
    
}, 10500);

    gsap.to(".hero-head > span", {
        opacity: 1, 
        duration: 1,
        ease: "power4.inOut",
        delay: 11,
    })


    gsap.to(".hero-para, .hero-pill-text", {
        opacity: 1,
        duration: 1,
        ease: "power4.inOut",
        delay: 11.2,
    });
    gsap.to(" .hero-cta, .lets-talk-cta", {
        scale: 1,
        duration: 1,
        ease: "power4.inOut",
        delay: 11.2,
    });

    gsap.to("header > div, .grid-free-anim-carousel", {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
        delay: 11.5,
    });

    gsap.to(" body, html", {
        overflow: "unset",
        height: "auto",
        delay: 11.5,
    })

}else{
    console.log("loading...")
}
}