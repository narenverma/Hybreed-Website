import React from 'react';
import styled from "styled-components";

export const MarqueeContainer = styled.div``;

const MarqueeWrap = styled.div`
  margin: auto;
  overflow:hidden;
  position: relative;
  width: 100%;
  /* margin-top: 8rem; */
  
  &::before,
  &::after {
    content: "";
    /* height: 100px; */
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
  
  @keyframes marqueeAnimation {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-418px * 7)); }
  }

  .slide-track {
    animation: marqueeAnimation 35s linear infinite;
    display: flex;
    width: calc(418px * 14);
  }
  
  .slide {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    width: 418px;
  }
`

export const MarqueeSlideV2 = ({ children, marqueeWidth }) => {
  return (
    <MarqueeWrap>
        <div className="slide-track">
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
            <div className="slide">
              <img src={require("../../assets/images/hybreed-footer-marquee.svg").default} alt={'hybreed'} />
              <img src={require("../../assets/images/hybreed-footer-marquee-dot.svg").default} alt={'hybreed'} />
            </div>
        </div>
    </MarqueeWrap>
  );
};

