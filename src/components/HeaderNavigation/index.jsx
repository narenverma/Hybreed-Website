import React, { useEffect, useRef, useState } from 'react';
import { HeaderNavigationHeader, IconWrap, NavigationWrap, HeaderLogo, MobileMenuWrap, BackdropBg } from './styled.js';

import { CustomBorderBtn, IconBtn, LinkBtn, UpperCaseHeader } from '../../assets/css/globalStyle.js'
import { Link } from 'react-router-dom';
import { socialMediaList } from '../../utils/apisList.js';
import { FooterLinkWrap, SocialWrap } from '../FooterWrapper/styled.js';


export default function HeaderNavigation() {

useEffect(() => {

  document.querySelectorAll("a").forEach((link)=>{
              
    link.addEventListener("click", (el)=>{ 
      // console.log(link.href)
setTimeout(()=>{
  window.scrollTo(0,0)
}, 1000);
  })
      // link.target.classList.remove("active")
      
  })

},[]) 

  return (
    <>
      <HeaderNavigationHeader  >
        <HeaderNavigationWrapper />
      </HeaderNavigationHeader>
    </>
  )

}


function HeaderNavigationWrapper() {

  let [openCloseMenu, setOpenCloseMenu] = useState(true)
  const checkOpen = () => {
    setOpenCloseMenu(false)
  }
  const checkClose = () => {
    setOpenCloseMenu(true)
  }

  let updateAnim = useRef();

  const openMenuAnim = () => {
    updateAnim.current.style.opacity = 1;
    updateAnim.current.style.scale = 1;
    updateAnim.current.style.filter = "blur(0px)";
document.body.classList.add("overflow-hidden");
  }

  const closeMenuAnim = () => {
    updateAnim.current.style.opacity = 0;
    updateAnim.current.style.scale = 1.5;
    updateAnim.current.style.filter = "blur(15px)";
document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      updateAnim.current.style.scale = .8;
    }, 400)
  }


  return (
    <>
      <NavigationWrap>
        <div className='container'>
          <div className='row justify-content-between align-items-center gy-lg-0 gy-3  '>

            <div className=" col-lg-4 col-12  social-links-circle-wrap order-lg-0 order-last d-lg-block d-none">
              <IconWrap className='d-flex    align-items-center justify-content-lg-start justify-content-center order-lg-0 '>
                {
                  socialMediaList.map((item, index) => (

                    <CustomBorderBtn btntype={'icon'} key={index}>
                      <Link to={item.socialLink} target="_blank">
                        <img src={require("../../assets/images/" + item.socialIcon)} alt={item.socialAlt} />
                      </Link>
                    </CustomBorderBtn>
                  ))
                }
              </IconWrap>
            </div>


            <div className='col-lg-4 col-6 d-flex justify-content-lg-center justify-content-start order-lg-0 order-first '>
              <HeaderLogo className='text-center'>
              <Link to={'/'}>
                <img src={require("../../assets/images/hybreed-header.svg").default} alt={'hybreed'} />
              </Link>
              </HeaderLogo>
            </div>

            <div className='col-lg-4 col-6   d-lg-flex justify-content-end d-none'>
              <CustomBorderBtn className="text-end" btntype={'btn'}><Link className='light-btn' to='https://hybreed.co/contact'>Contact us</Link></CustomBorderBtn>
            </div>
            <div className="col-6 d-lg-none text-end">
              <button type="button" className=" menu-open-btn" onClick={() => {
                checkOpen();
                openMenuAnim();
              }}>
                <img src={require("../../assets/images/menu-open-icon.svg").default} alt="menu icon" />
              </button>
            </div>

          </div>

          <MobileMenuWrap ref={updateAnim}
            className={"d-lg-none" + (openCloseMenu ? "" : " open-mobile-menu")}
          // hidden={openCloseMenu ? true : false }
          >
            <button type="button" className=" menu-close-btn"
              onClick={() => {
                checkClose();
                closeMenuAnim();
              }}
            >
              <img src={require("../../assets/images/menu-close-icon.svg").default} alt="menu icon" />
            </button>
            <UpperCaseHeader className='text-lg-center mb-2'>
              WE'RE NOT SUPER ACTIVE, BUT STILL WORTH A LOOK!😊
            </UpperCaseHeader>

            <SocialWrap >
              {
                socialMediaList.map((item, index) => (
                  <div key={index}>
                    <IconBtn icon={require(`../../assets/images/${item.socialIcon}`)} >
                      <Link to={item.socialLink}   target="_blank" >{item.socialName}</Link>
                    </IconBtn>
                  </div>
                ))
              }
            </SocialWrap>

            <FooterLinkWrap className='col-lg-3 text-start '>
              <div>
                <p className="theme-text-gray mb-2">Start a conversation</p>
                <LinkBtn>
                  <Link className='theme-text-white  ' to="mailto:arg@hybreed.co"> arg@hybreed.co</Link>
                </LinkBtn>
              </div>
              <div>
                <p className="theme-text-gray mb-2">Call us</p>
                <LinkBtn>
                  <Link className='theme-text-white' to="tel:+919833572299">+ 91 9833 57 2299</Link>
                </LinkBtn>
              </div>
            </FooterLinkWrap>

          </MobileMenuWrap>
        </div>
      </NavigationWrap>
      <BackdropBg hidden={openCloseMenu ? true : false} />
    </>
  )
}

