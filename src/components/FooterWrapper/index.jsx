import React, {  } from 'react'
import { FooterContainer, FooterLinkWrap, FooterWrap, QuotesWrap, SocialWrap } from './styled'
import { IconBtn, LinkBtn, PillMinHead, UpperCaseHeader } from '../../assets/css/globalStyle'
import { Link } from 'react-router-dom'
import { MarqueeSlideV2 } from '../MarqueeSlideV2'

function FooterWrapper() {
    const handleWeather = () => {
        return 'No data found'
    }
    const weather = handleWeather()

  return (
    <FooterContainer>
        <FooterWrap className='row gy-lg-0 gy-5' >
          <QuotesWrap className='col-lg-5'>
            <h3 className="section-head theme-text-white text-lg-start text-center">
                "Design creates culture.<br/>
                Culture shapes values.<br/>
                Values determine the future"
            </h3>
            <p className='theme-text-white text-lg-end text-center'>- Robert L. Peters</p>
          </QuotesWrap>
          <FooterLinkWrap className='col-lg-3 text-lg-start text-center'>
            <LinkBtn>
              <p className="theme-text-gray">Start a conversation</p>
              <Link className='theme-text-white  ' to="mailto:arg@hybreed.co"> arg@hybreed.co</Link>
            </LinkBtn>
            <LinkBtn>
              <p className="theme-text-gray">Call us</p>
              <Link className='theme-text-white' to="tel:+919221915405">+ 919221915405</Link>
            </LinkBtn>
          </FooterLinkWrap>
        </FooterWrap>
        <FooterWrap className='flex-column'>
          <UpperCaseHeader>
            WE'RE NOT SUPER ACTIVE, BUT STILL WORTH A LOOK!😊
          </UpperCaseHeader>
          <div className='row gy-4 justify-content-between '>

          <div className="col-xl-4 col-lg-4 order-lg-0 order-last">
            <p className=' theme-text-white text-lg-start text-center '>©2024 Hybreed Technologies, T&C</p>
          </div>

          <div className='col-xl-5 col-lg-4 order-lg-0 order-first'>
            <SocialWrap  >
              <IconBtn icon={require("../../assets/images/dribble-icon.svg").default}>
                <Link>Dribbble</Link>
              </IconBtn>
              <IconBtn icon={require("../../assets/images/insta-icon.svg").default}>
                <Link>Instagram</Link>
              </IconBtn>
              <IconBtn icon={require("../../assets/images/linkedin-icon.svg").default}>
                <Link>LinkedIn</Link>
              </IconBtn>
              <IconBtn icon={require("../../assets/images/x-icon.svg").default}>
                <Link><span className='text-decoration-line-through'>Twitter</span><span>X</span></Link>
              </IconBtn>
            </SocialWrap>
          </div>

          <div className="col-xl-3 col-lg-4">
            <p className=' theme-text-white text-lg-end text-center' >{weather}</p>
          </div>
          </div>
        </FooterWrap>
    </FooterContainer>
  )
}

export default function Footer() {
  return (
    <FooterContainer data-scroll-section className="theme-bg-black-secondary ">
      <div className="container">
            <FooterWrapper />
      </div>
      <MarqueeSlideV2 />
    </FooterContainer>
  )
}

 