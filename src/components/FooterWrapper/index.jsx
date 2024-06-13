import React, { useEffect, useState } from 'react'
import { FooterContainer, FooterLinkWrap, FooterWrap, QuotesWrap, SocialWrap } from './styled'
import { IconBtn, LinkBtn, PillMinHead, UpperCaseHeader } from '../../assets/css/globalStyle'
import { Link } from 'react-router-dom'
import { MarqueeSlideV2 } from '../MarqueeSlideV2'
import { socialMediaList } from '../../utils/apisList'

function FooterWrapper() {

  // const weatherApi = {
  //   key: "63c8c99de9d77e601a860cc8a52c66ec",
  //   base: "https://api.openweathermap.org/data/2.5/",
  // }

  // let [getLatitude, setGetLatitude] = useState();
  // let [getLongitude, setGetLongitude] = useState();

  useEffect(() => {



  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   } else {
  //     console.log("Geolocation not supported");
  //   }
  //   function error() {
  //     console.log("Unable to retrieve your location");
  //   }
  //   function success(position) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  //     // setGetLatitude(latitude);
  //     // setGetLongitude(longitude);
        

  //   const getWeather = () => {
  //     fetch(`${weatherApi.base}weather?lat=${latitude}&lon=${longitude}&appid=${weatherApi.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //       })
  //   }

  //   setTimeout(() => {

  //     getWeather()
  //   }, 1000)
  // }

  }, [])

  const handleWeather = () => {
    return 'No data found'
  }
  const weather = handleWeather()

  return (
    <FooterContainer>
      <FooterWrap className='row gy-lg-0 gy-5' >
        <QuotesWrap className='col-lg-5'>
          <h3 className="section-head theme-text-white    ">
            "Design creates culture.<br />
            Culture shapes values.<br />
            Values determine the future"
          </h3>
          <p className='theme-text-white text-end  '>- Robert L. Peters</p>
        </QuotesWrap>
        <FooterLinkWrap className='col-lg-3 text-start '>
          <div>
            <p className="theme-text-gray">Start a conversation</p>
            <LinkBtn>
              <Link className='theme-text-white  ' to="mailto:arg@hybreed.co">arg@hybreed.co</Link>
            </LinkBtn>
          </div>
          <div>
            <p className="theme-text-gray">Call us</p>
            <LinkBtn>
              <Link className='theme-text-white' to="tel:+919833572299">+ 91 9833 57 2299</Link>
            </LinkBtn>
          </div>
        </FooterLinkWrap>
      </FooterWrap>
      <FooterWrap className='flex-column'>
        <UpperCaseHeader className='text-lg-center'>
          WE'RE NOT SUPER ACTIVE, BUT STILL WORTH A LOOK!😊
        </UpperCaseHeader>
        <div className='row gy-4 justify-content-between '>

          <div className="col-xl-3 col-lg-4 order-lg-0 order-last">
            <p className=' theme-text-white text-start  '>©2024 Hybreed Technologies, T&C</p>
          </div>

          <div className='col-xl-6 col-lg-4 order-lg-0 order-first'>
            <SocialWrap  >
            {
              socialMediaList.map((item, index) => (
                <div key={index}> 
              <IconBtn icon={require(`../../assets/images/${item.socialIcon}`)} > 
                <Link to={item.socialLink}>{item.socialName}</Link>
              </IconBtn>
                </div>
              ))
            }
            </SocialWrap>
          </div>

          <div className="col-xl-3 col-lg-4 pt-lg-0 pt-4">
          <LinkBtn className=' theme-text-white text-lg-end text-start'>
              <Link className='theme-text-white download-icon' to="https://docsend.com/view/gh7hah5npy6gny5m" target={'_blank'} download={"true"}>Company Deck</Link>
              {/* <div>
          <strong><sub className='theme-text-gray'>File Size 3Mb.</sub></strong>
              </div> */}
            </LinkBtn>
            {/* <p className=' theme-text-white text-lg-end text-start' >{weather}</p> */}
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

