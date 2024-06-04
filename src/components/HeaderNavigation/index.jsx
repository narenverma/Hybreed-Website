import React from 'react';
import { HeaderNavigationHeader, IconWrap, NavigationWrap, HeaderLogo } from './styled.js';

import { CustomBorderBtn } from '../../assets/css/globalStyle.js'
import { Link } from 'react-router-dom'; 


export default function HeaderNavigation() {



  return (
    <HeaderNavigationHeader  > 
        <HeaderNavigationWrapper /> 
    </HeaderNavigationHeader>
  )

}


 function HeaderNavigationWrapper() {
  return (
    <NavigationWrap>
      <div className='container'>
        <div className='row justify-content-between align-items-center gy-lg-0 gy-3  '>

        <div className=" col-lg-4 col-12  social-links-circle-wrap order-lg-0 order-last ">
          <IconWrap className='d-flex    align-items-center justify-content-lg-start justify-content-center order-lg-0 '>
            <CustomBorderBtn btntype={'icon'}><Link to={'/'}><img src={require("../../assets/images/insta-icon.svg").default} alt={'insta-social'} /></Link></CustomBorderBtn>
            <CustomBorderBtn btntype={'icon'}><Link to={'/'}><img src={require("../../assets/images/linkedin-icon.svg").default} alt={'linkedin-social'} /></Link></CustomBorderBtn>
            <CustomBorderBtn btntype={'icon'}><Link to={'/'}><img src={require("../../assets/images/x-icon.svg").default} alt={'x-social'} /></Link></CustomBorderBtn>
            <CustomBorderBtn btntype={'icon'}><Link to={'/'}><img src={require("../../assets/images/dribble-icon.svg").default} alt={'dribbble-social'} /></Link></CustomBorderBtn>
          </IconWrap>
        </div>

          <div className='col-lg-4 col-6 d-flex justify-content-lg-center justify-content-start order-lg-0 order-first '>
            <HeaderLogo className='text-center'>
              <img src={require("../../assets/images/hybreed-header.svg").default} alt={'hybreed'} />
            </HeaderLogo>
          </div>

          <div className='col-lg-4 col-6   d-flex justify-content-end '>
            <CustomBorderBtn className="text-end"  btntype={'btn'}><Link className='light-btn' to='/'>Contact us</Link></CustomBorderBtn>
          </div>
        </div>
      </div>
    </NavigationWrap>
  )
}

 