import React, { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from "gsap/all";
// import { ScrollTriggerConf } from '../SmoothScroll';
import { MarqueeStripList, MarqueeStripRow } from "./styled.js";

// import { marqueeList } from '../../utils/contants';



export default function Index({ data }) {

  // styled css start


  // styled css end
  const filteredItems1 = data?.filter(item => item.itemCategory === 1);
  const filteredItems2 = data?.filter(item => item.itemCategory === 2);
  const filteredItems3 = data?.filter(item => item.itemCategory === 3);







  useEffect(() => {

    if(false){

    
    setTimeout(() => {
      // ScrollTriggerConf();
      gsap.registerPlugin(ScrollTrigger);

      document.querySelectorAll(".marquee-strip-list").forEach((marqueeStrip, marqueeIndex) => {



        const additionalX = { val: 0 };
        let additionalXAnim;
        let offset = 0;
        let originalImages = marqueeStrip.querySelectorAll("div");
        const container = marqueeStrip;
        const sliderWidth = container.offsetWidth;

        // DUPLICATE IMAGES FOR LOOP
        originalImages.forEach((image) => {
          var clone = image.cloneNode(true);
          container.appendChild(clone);
          container.appendChild(clone); 
          container.appendChild(clone); 
        });

        let images = marqueeStrip.querySelectorAll("div");

        // SET ANIMATION

        if (marqueeIndex % 2 === 1) {

          images.forEach((item) => {
            gsap.to(item, {
              x: "+=" + Number(sliderWidth / 4),
              duration: 2 * images.length,
              repeat: -1,
              ease: "none",
              modifiers: {
                x: gsap.utils.unitize((x) => {
                  offset -= additionalX.val;
                  x = (parseFloat(x) + offset - marqueeStrip.offsetWidth) % Number(sliderWidth * 0.5);
                  return x;
                })
              }
            });
          });

        } else {


          images.forEach((item) => {
            gsap.to(item, {
              x: "-=" + Number(sliderWidth / 4),
              duration: 2 * images.length,
              repeat: -1,
              ease: "none",
              modifiers: {
                x: gsap.utils.unitize((x) => {
                  offset += additionalX.val;
                  x = (parseFloat(x) + offset) % -Number(sliderWidth * 0.5);
                  return x;
                })
              }
            });
          });
        }

        const imagesScrollerTrigger = ScrollTrigger.create({
          trigger: "main",
          // scroller: "[data-scroll-container]",
          start: "top 50%",
          end: "bottom 50%",
          onUpdate: function (self) {
            const velocity = self.getVelocity();
            if (velocity > 0) {
              if (additionalXAnim) additionalXAnim.kill();
              additionalX.val = -velocity / window.innerWidth;
              additionalXAnim = gsap.to(additionalX, { val: 0 });
            }
            else {
              if (additionalXAnim) additionalXAnim.kill();
              additionalX.val = velocity / -window.innerWidth;
              additionalXAnim = gsap.to(additionalX, { val: 0 });
            }
          }
        });

      })

    }, 300)
  }


 




  }, [])


  document.querySelectorAll(".marquee-strip-list > div").forEach((marqueeList)=>{
    let getListImg = marqueeList.querySelector(" img").src
    let getImgThumbCard = document.querySelector(".products-img-tile")
    let getImgThumb = document.querySelector(".products-img-tile img")
    marqueeList.addEventListener("mouseenter",()=>{

      getImgThumbCard.style.display = "block";
      getImgThumb.src = getListImg

      // console.log(getImgThumb)
        

    })
    marqueeList.addEventListener("mouseleave",()=>{
      getImgThumbCard.style.display = "none";
    })
  })


  return (
    <>

      {filteredItems1 && <MarqueeStripRow>
        <MarqueeStripList className="marquee-strip-list">

          {
            filteredItems1.map((item, index) => (
              <div className="h2" key={index}>{item.itemName}{item?.itemCount ? `(${item.itemCount})` : ''}
                <span hidden>
                  <img src={require("../../assets/images/" + item.itemImg)} alt={item.itemName} />
                </span>
              </div>
            ))
          }

        </MarqueeStripList>
      </MarqueeStripRow>}

      {filteredItems2 && <MarqueeStripRow>
        <MarqueeStripList className="marquee-strip-list">

          {
            filteredItems2.map((item, index) => (
              <div className="h2" key={index}>{item.itemName}{item?.itemCount ? `(${item.itemCount})` : ''}
                <span hidden>
                  <img src={require("../../assets/images/" + item.itemImg)} alt={item.itemName} />
                </span>
              </div>
            ))
          }

        </MarqueeStripList>
      </MarqueeStripRow>}

      {filteredItems3 && <MarqueeStripRow>
        <MarqueeStripList className="marquee-strip-list">
          {
            filteredItems3.map((item, index) => (
              <div className="h2" key={index}>{item.itemName}{item?.itemCount ? `(${item.itemCount})` : ''}
                <span hidden>
                  <img src={require("../../assets/images/" + item.itemImg)} alt={item.itemName} />
                </span>
              </div>
            ))
          }
        </MarqueeStripList>
      </MarqueeStripRow>}


    </>
  )
}
