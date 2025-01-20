import styled from "styled-components";
import { IconBtn } from "../../assets/css/globalStyle";
import { SocialWrap } from "../FooterWrapper/styled";


export const HeaderNavigationHeader = styled.div` `;
export const HeaderLogo = styled.div`
 & img{
    height: 2.5rem;
    width:auto;
 }
 @media screen and (max-width: 768px) {
    /* & img{
        height: 1.5rem; 
    } */
 }
`;
export const NavigationWrap= styled.div`
& .menu-open-btn , 
& .menu-close-btn {
    background-color: var(--theme-primary);
    border-radius: 50%;
    border: 0px;
     
    
    & img{
    height:2rem;
}

}

`;
export const IconWrap= styled.div`
    text-align: center;
    gap: 1.12rem;

    @media screen and (max-width: 768px) {
        /* flex-wrap: wrap; */
        gap: 1rem;
        
    }
`;

export const MobileMenuWrap = styled.div`
position:absolute;
top:1.12rem;
left:50%;
translate: -50% 0;
z-index: 11;
padding: 3.25rem  1.08rem 2.08rem  1.08rem;
background-color:var(--theme-white);
width: calc(100% - 2.24rem);
border-radius: 1rem;
scale: 0.8;
opacity: 0;
filter:blur(20px);
pointer-events: none;
transition: 400ms ease-out;

&.open-mobile-menu{
    scale: 1;
    opacity: 1;
    filter:blur(0);
    pointer-events: auto;
}


a, a> *{
    color: var(--theme-black-primary) !important;
}

& ${SocialWrap}{
    margin-bottom: 2.08rem;
}
& ${IconBtn}{
    & a{ 
        position: relative;
        width:100%;
         justify-content: start;
        &:before{
            filter:invert(0);
        }
        &:after{
		content:"" ;
		background: url(${require("../../assets/images/arrow-black-icon.svg").default}) center/contain no-repeat ;  
		display: block;
		--btn-after-size:1.3125rem;
		width: var(--btn-after-size);
		height: var(--btn-after-size); 
		rotate: 45deg;
    transition: background-position 200ms ease-in   ; 
    position: absolute;
    right:0rem;
    top:0rem;
    left: auto;
    transition:  300ms ease-in-out;
    z-index: -1;
	}
  /* &:hover:after{
    right:-.5rem;
    top:-.5rem;
  } */
    }
}

& .menu-close-btn{
    position: absolute;
    top: 1.12rem;
    right: 1.12rem;
    cursor: pointer;
    z-index: 1;
}

`;

export const BackdropBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
`;