import { createGlobalStyle, styled } from "styled-components";


export const GlobalStyle = createGlobalStyle`
 
  @font-face {
	font-family: 'Inter-Light';
	src: url(${require("../fonts/inter/Inter-Light.woff2")}) format('woff2'), url(${require("../fonts/inter/Inter-Light.woff")}) format('woff');
	font-weight: 300;
	font-display: swap;
	font-style: normal;
}
  @font-face {
	font-family: 'Inter-Regular';
	src: url(${require("../fonts/inter/Inter-Regular.woff2")}) format('woff2'), url(${require("../fonts/inter/Inter-Regular.woff")}) format('woff');
	font-weight: 400;
	font-display: swap;
	font-style: normal;
}
  @font-face {
	font-family: 'Inter-Medium';
	src: url(${require("../fonts/inter/Inter-Medium.woff2")}) format('woff2'), url(${require("../fonts/inter/Inter-Medium.woff")}) format('woff');
	font-weight: 500;
	font-display: swap;
	font-style: normal;
}

@font-face {
	font-family: 'Inter-SemiBold';
	src: url(${require("../fonts/inter/Inter-SemiBold.woff2")}) format('woff2'), url(${require("../fonts/inter/Inter-SemiBold.woff")}) format('woff');
	font-weight: 600;
	font-display: swap;
	font-style: normal;
}

@font-face {
	font-family: 'Inter-Bold';
	src: url(${require("../fonts/inter/Inter-Bold.woff2")}) format('woff2'), url(${require("../fonts/inter/Inter-Bold.woff")}) format('woff');
	font-weight: 700;
	font-display: swap;
	font-style: normal;
}
@font-face {
	font-family: 'Inter-ExtraBold';
	src: url(${require("../fonts/inter/Inter-ExtraBold.woff2")}) format('woff2'), url(${require("../fonts/inter/Inter-ExtraBold.woff")}) format('woff');
	font-weight: 800;
	font-display: swap;
	font-style: normal;
}
@font-face {
	font-family: 'Inter-Black';
	src: url(${require("../fonts/inter/Inter-Black.woff2")}) format('woff2'), url(${require("../fonts/inter/Inter-Black.woff")}) format('woff');
	font-weight: 900;
	font-display: swap;
	font-style: normal;
}


@font-face {
	font-family: 'Inter-Tight-Regular';
	src: url(${require("../fonts/inter-tight/InterTight-Regular.woff2")}) format('woff2'), url(${require("../fonts/inter-tight/InterTight-Regular.woff")}) format('woff');
	font-weight: 400;
	font-display: swap;
	font-style: normal;
}
@font-face {
	font-family: 'Inter-Tight-Medium';
	src: url(${require("../fonts/inter-tight/InterTight-Medium.woff2")}) format('woff2'), url(${require("../fonts/inter-tight/InterTight-Medium.woff")}) format('woff');
	font-weight: 500;
	font-display: swap;
	font-style: normal;
}
@font-face {
	font-family: 'Inter-Tight-SemiBold';
	src: url(${require("../fonts/inter-tight/InterTight-SemiBold.woff2")}) format('woff2'), url(${require("../fonts/inter-tight/InterTight-SemiBold.woff")}) format('woff');
	font-weight: 600;
	font-display: swap;
	font-style: normal;
}
@font-face {
	font-family: 'Inter-Tight-Bold';
	src: url(${require("../fonts/inter-tight/InterTight-Bold.woff2")}) format('woff2'), url(${require("../fonts/inter-tight/InterTight-Bold.woff")}) format('woff');
	font-weight: 700;
	font-display: swap;
	font-style: normal;
}


:root{
--equal-paddings: 7.5rem;
}

* {
color: var(--theme-black);
padding: 0;
margin: 0;
}

html {
scroll-behavior: initial!important;
font-size: 16px;
/* font-size: 1.1vw; */
}

body {
margin: 0;
width: 100%;
box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
font-size: 1.05rem;
font-family: 'Inter-Regular';
background-color: var(--theme-white);
color: var(--theme-black);
-moz-osx-font-smoothing: grayscale;
overflow-x: hidden;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: auto;
-moz-text-size-adjust: auto;
-ms-text-size-adjust: auto;
text-size-adjust: auto;
}

::selection {
color: var(--theme-black-primary);
background-color:  var(--theme-primary);
}



/* scroll bar start */


* {
scrollbar-width: thin;
scrollbar-color:  var(--theme-primary-600) var(--theme-mint-cream);
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
background-color: var(--theme-primary-600);
}

*::-webkit-scrollbar-thumb {
background-color:  var(--theme-mint-cream);
border-radius: 1.0625rem;
border: 0px;
}


/* scroll bar end */


h1, h2, h3, h4, h5, h6, ul, p {
margin: 0;
padding: 0;
vertical-align: baseline;
}

h1, h2, h3, h4, h5, h6, .h1,.h2,.h3{
color: var(--theme-black);
font-family: 'Inter-Tight-Medium';
letter-spacing:  -0.22px;
line-height:  120% ;  
}
h1,  .h1{
  font-size: 5.5rem;
  letter-spacing: -2px;
}

h2, .h2 {
font-size: 4rem;
}

h3, .h3 {
font-size: 3rem;
}

h4 {
font-size: 2.5rem;
}

h5 {
font-size: 1.6rem;
}

h6 {
font-size: 1.2rem;
}


a, *::before, *::after, img, span, input, button, .navbar, .fixedmenu, .tp-bullet {
transition: ease-in-out 0.2s;
-webkit-transition: ease-in-out 0.2s;
-moz-transition: ease-in-out 0.2s;
-ms-transition: ease-in-out 0.2s;
-o-transition: ease-in-out 0.2s;
}

.btn.focus, .btn:focus, .form-control:focus {
-webkit-box-shadow: none;
box-shadow: none;
}

a, a:link, a:visited, a:hover, a:active {
outline: none;
text-decoration: none; 
}

p {
word-wrap: break-word;
word-break: break-word;
font-size: 1.375rem;
line-height: 145.455%;
font-family: 'Inter-Regular';
margin-bottom: 1rem;
letter-spacing: -0.0625rem;
/* -webkit-hyphens: auto;
hyphens: auto; */
}

li, p, span, b, strong {
color: var(--theme-black-secondary);
}

 

strong, b {
font-family: 'Inter-Bold';
}

ul, ol {
padding-left: 1.2rem;
}
:is(ul, ol) li:not(:last-child) {margin-bottom: 1rem;}

input, textarea, select, button:focus {
outline: 0;
}

section {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.equal-padding-T {
padding-top: var(--equal-paddings);
}

.equal-padding-B {
padding-bottom: var(--equal-paddings);
}

.hero-head{}
.section-head{}
.sub-head{font-size:1.375rem;}

.theme-fw-500{
  font-family:"Inter-Medium";
}
.theme-fw-300{
  font-family:"Inter-Light";
}



${'' /* .hero-head .word, */}
.section-head .word {
    transform: translateY(16px);
    transform-origin: 0% 100%;
    opacity: 0;
    transition: 700ms ease-out calc(var(--word-index) / 3 * 0.1s);
    color: currentColor;
}

.hero-head.show-head .word,
.section-head.show-head .word {
    transform: translateX(0%);
    opacity: 1;
}
 




.next-section-curve {
padding-bottom: var(--equal-paddings);
}
.next-section-curve:after {
    content:'';
    height: var(--equal-paddings) !important;
	visibility: visible !important;
    width:100%;
     
    position:absolute;
    bottom:0;
    left:0;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
	display: block;
}




header{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  z-index: 999;
  transition: 300ms ease-in-out;

  filter: invert(1);
  mix-blend-mode: difference;

  &.headerActive {
    ${'' /* background-color: var(--theme-white);  */}
    ${'' /* box-shadow: 0px 1px 28px 0 #00000017; */}
  }
  
  & .container{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    transition: 300ms ease-in-out;
  }

  &.headerActive .container{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    &.headerActive .social-links-circle-wrap{
      display: none!important;
    }
    &.headerActive .container{
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  }
}

.pill-thumbs-anim{
  display: inline-block;
    height: auto !important;
    width: 231px;
    margin-bottom: -1rem;
    aspect-ratio: 22 / 9;
    ${'' /* background-color: #fff; */}
    border-radius: 10rem;
 
}


.para-reveal-wrap p span{
opacity:.3;
}


.magnet-btn {
    transform: translate(var(--tx, 0), var(--ty, 0));
    transition: all 0.2s ease-out;
    display: inline-block;
}
.magnet-btn-text{ 
  transform: translate(var(--tx, 0), var(--ty, 0));
  transition: all 0.2s ease-out;
  color:currentColor;
  display: inline-block;
}

/* cursor code */
body:hover .cursor{
  opacity: 1;
}
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  pointer-events: none;
}
.cursor--hover .cursor-inner {
  transform: scale(0.5);
  opacity: 0;
}
.cursor--hover .cursor-outer {
  transform: scale(1.4);
  border-color: #000;
  opacity: 1;
}

.cursor-move-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-top: -3px;
  margin-left: -3px;
  z-index: 1;
  
}


.cursor-move-outer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: height .4s cubic-bezier(0.25, 0.46, 0.45, 0.94), width .4s cubic-bezier(0.25, 0.46, 0.45, 0.94), top .4s cubic-bezier(0.25, 0.46, 0.45, 0.94), left .4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;

  will-change: height, width;
}
.cursor.active .cursor-move-outer, .cursor.active .cursor-move-inner {
  width: 100px;
  height: 100px;
  top: -50%;
  left: -50%;
}

.cursor-inner {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #0000;
  border-radius: 50%;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: .1s linear .2s ;
  will-change: transform, opacity;
}
.cursor.active .cursor-inner{
  background-color: #0000;
  margin:3px 0 0  3px;
  display: flex;
  align-items: center;
  justify-content: center;
    transition: .1s linear 0s, background-color 0s;
}
.cursor p{
  margin:0;
  font-size: 0;
  transition: 0.2s ease-in;
}
.cursor.active p{
  font-size: 18px;

}
.cursor-outer {
  display: block;
  width: 100%;
  height: 100%; 
  border-radius: 50%;
  background-color: var(--theme-primary);
  box-sizing: border-box;
  transition:  transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: transform, opacity;
}


/* cursor code end */


.page-loader{
  width:100vw;
  height: 100svh;
  position:fixed;
  top:0;
  left:0;
  background-color: #fff;
  z-index: 9999999;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap:wrap;
  transition: 800ms ease-in-out;
  overflow: hidden;

& video {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

  
 
#loader {
  position: absolute;
  bottom:0;
  left: 0;
  width: 100%;  
  background-color: var(--theme-black-secondary);
}

 
#percent { 
  color: var(--theme-primary);
  transition: all 90ms linear;
    font-size: 0.72875rem;
    border-radius:100%;
    background-color: var(--theme-black-secondary);
  width: 2rem;
height: 2rem; 
display: inline-flex;
align-items: center;
justify-content: center;
box-shadow: 0 0 0 .31rem  var(--theme-primary);
}
#bar { 
  height: 2.4375rem;
  text-align: end;
  width: 0%; 
  background: linear-gradient(90deg,  var(--theme-primary) calc(100% - 1rem) , #0000 1rem);
  transform-origin: left;
  transition:   600ms linear  ; 
  display: flex;
  align-items: center;
  justify-content: end;
}

}


/* smooth scroll code start */

 /*! locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
 ${'' /* html.has-scroll-smooth {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;  
}

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; }

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; }

[data-scroll-direction="horizontal"] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap; }

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%; }

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0; display: none; }
  .c-scrollbar:hover {
    transform: scaleX(1.45); }
  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
    opacity: 1; }
  [data-scroll-direction="horizontal"] .c-scrollbar {
    width: 100%;
    height: 10px;
    top: auto;
    bottom: 0;
    transform: scaleY(1); display: none;}
    [data-scroll-direction="horizontal"] .c-scrollbar:hover {
      transform: scaleY(1.3); display: none; }

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab; }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing; }
  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
    right: auto;
    bottom: 0;  display: none;} */}

/* mooth scroll code   end */


@keyframes infinite-RTL {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}


.anim-bottom-box,.anim-left-box, .anim-right-box{
  opacity: 0;
  transition: 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94); 
}
.anim-bottom-box {
  translate: 0 100px;
}
.anim-left-box {
  translate: -100px 0 ;
  
}
.anim-right-box {
  translate: 100px 0 ;
}

:is(.anim-bottom-box,.anim-left-box, .anim-right-box).active-anim{
  translate: 0 0;
  opacity: 1;
}



@media screen and (max-width:  768px) {

:root{
  --equal-paddings: 3rem;
}

  h1,  .h1{
    font-size: 3rem;
letter-spacing: 0px;
}

h2, .h2 {
  font-size: 2.25rem;
}

h3, .h3 {
font-size: 1.5rem;
}

h4 {
font-size: 1.3rem;
}

h5 {
font-size: 1.2rem;
}

h6 {
font-size: 1rem;
}

p, .sub-head{
font-size: 1rem;
}

br{display: none;}

.equal-padding-T {
padding-top: var(--equal-paddings);
}

.equal-padding-B {
padding-bottom: var(--equal-paddings);
}

.container{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.pill-thumbs-anim{
  display: inline-block;
  height: auto !important;
    width: 100%;
    margin: 1rem 0;
    aspect-ratio: 21 / 6 ;

}

.cursor{
  display: none!important;
}
 
}


`;


export const PillMinHead = styled.div`
 & p{
  margin-bottom: 1rem;
  padding: .25rem 1rem;
  border-radius: 1.5625rem;
  border: 1px solid var(--theme-black);
  color: #161616;
  display: inline-block;
  font-size: 0.875rem;
  letter-spacing: -0.0125rem;
  text-transform: uppercase;
 }

 &.light-pill p{
	color: var(--theme-white);
	border-color: var(--theme-white);
 }

 &.ghost-pill p{
  color: var(--theme-gray);
  border-width: 0px;
  margin: 0px;
  padding: 0px;
 }

@media screen and (max-width:  768px) {

  & p{
    font-size: 0.61588rem;
    padding: 0.20rem 0.72rem;
  }
}

`;

export const UpperCaseHeader = styled.p`
    color: var(--theme-gray);
    display: inline-block;
    font-size: 0.875rem !important; /* FIXME: for some reason it is not working without important */
    letter-spacing: -0.00875rem;
    line-height: 2rem;
    text-transform: uppercase;
     
`

export const CustomBtn = styled.div`
& :is(a,button){
	display: inline-flex;
	align-items: center;
	gap:1.5rem;
	padding: .5rem .5rem .5rem 1.7rem; 
	text-transform: uppercase;
	font-family: 'Inter-Tight-Medium';
	font-size: 1.125rem;
	line-height:133.333%;
	background-color: var(--theme-black-primary);
	color:var(--theme-white);
	border-radius: 2.875rem;
  transform-origin: left center;
    rotate: 0deg;
    transition: 300ms ease-out ;
	
  &.light-btn{
    background-color: var(--theme-white);
	color:var(--theme-black-primary);
} 
  &:hover{
      background-color: #2d2d2d!important;
      color: var(--theme-white) !important;
    }
  /* &:hover{
    animation: goDown 350ms ease-in forwards;
    @keyframes goDown {
      0%{
        rotate: 0deg;
      }
      50%{
        rotate: 10deg;
      }
      100%{
        rotate: 0deg;
      }
    }
  } */

	&:after{
		content:'';
		background-image: url(${require("../images/arrow-black-icon.svg").default}) ,
    url(${require("../images/arrow-black-icon.svg").default}) ;
    background-repeat: no-repeat, no-repeat;
    background-position: 50% 50%, 50% 175%;
    background-size: auto, auto;
		display: inline-block;
		--btn-after-size:3rem;
		width: var(--btn-after-size);
		height: var(--btn-after-size);
		border-radius: 100%;
		background-color: var(--theme-primary);
		rotate: 45deg;
    /* transition: background-position 200ms ease-in   ; */
    transition: background-position 0ms ease-in   ;
    clip-path: circle(50% at 50% 50%);
	}
  &:hover:after{
    transition: background-position 250ms ease-in 70ms  ;
    background-position: 50% -75%, 50% 50%;
    

    animation: clipDown 500ms ease-in ;

    @keyframes clipDown{
      0%{
        clip-path: circle(50% at 50% 50%);
      }
      25%{
        clip-path: circle(40% at 50% 50%);
      }
      70%{
        clip-path: circle(40% at 50% 50%);
      }
      100%{
        clip-path: circle(50% at 50% 50%);
      }
    }
  }

}
@media screen and (max-width: 768px){
/* & :is(a,button){
  display: flex;
  justify-content: space-between;
} */
}
`;

// used in footer
export const LinkBtn = styled.div`

 
& a{
	display: inline-flex;
  align-items: center;
  white-space: nowrap;
  letter-spacing: -0.01125rem;
	font-family: 'Inter-Tight-Medium';
  font-size: 1.75rem;
  text-decoration: underline !important; 
  position: relative; 
  
  &.light-btn{
    background-color: var(--theme-white);
    color:var(--theme-black-primary);
  }
 
    &:after{
		content:'';
    margin-left: 0.75rem;
		background-image: url(${require("../images/arrow-black-icon.svg").default}) ,
    url(${require("../images/arrow-black-icon.svg").default}) ;
    background-repeat: no-repeat, no-repeat;
    background-position: 50% 50%, 50% 230%;
    background-size: auto, auto;
		display: inline-block;
		--btn-after-size:2rem;
		width: var(--btn-after-size);
		height: var(--btn-after-size);
		border-radius: 100%;
		background-color: var(--theme-primary);
		rotate: 45deg;
    /* transition: background-position 200ms ease-in   ; */
    transition: background-position 0ms ease-in   ;
    clip-path: circle(50% at 50% 50%);
	}
  &:hover:after{
    transition: background-position 250ms ease-in 70ms  ;
    background-position: 50% -130%, 50% 50%;
    animation: clipDown 500ms ease-in ;
  } 

  &.download-icon:after{
    rotate: 180deg;
  }


}

@media screen and (max-width: 768px){
& :is(a,button){
  font-size: 1.55763rem;
}
}

`;

export const IconBtn = styled.div`
& :is(a,button){
	display: inline-flex;
	align-items: center;
  justify-content: center;
	font-family: 'Inter-Tight-Medium';
	font-size: 1rem;
	color:var(--theme-white);
  gap: 0.55819rem;
  position: relative;

	&:before{
		content:'';
    /* margin-right: 0.87rem; */
		background-image: url(${props => props.icon && props.icon});
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 1.18619rem;
		aspect-ratio: 1;
    filter: invert();
	}
  &:after{
    content:'';
    width: 100%;
    height: 1px;
    background-image: linear-gradient(0deg, #ffffff, #ffffff);
    background-size: 0% 100%;
    background-position: right center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    transition: background-size 0.2s linear;
  }
  &:hover:after{ 
    background-position: left center;
    background-size: 100% 100%;
  }
}
`

// used in header
export const CustomBorderBtn = styled.span`
position: relative;

& :is(a,button){
	display: inline-flex;
	align-items: center;
  overflow-x: visible;
  justify-content: center;
	padding: ${({ btntype }) => btntype === 'icon' ? '0.63rem 0.5rem' : `0.7rem 1.7rem`}; 
  border: 0.03rem solid var(--theme-gray);
	text-transform: uppercase;
	font-family: 'Inter-Tight-Medium';
	font-size: 1.125rem;
	line-height:133.333%;
	border-radius: 2.875rem;
  --btn-after-size: ${({ btntype }) => btntype === 'icon' && '2.2rem'};
  width: var(--btn-after-size);
  height: var(--btn-after-size);
overflow: hidden;
  position:relative;
  z-index:11;
  background-color: var(--theme-white);
	
  &.light-btn{
    background-color: var(--theme-white);
    color:var(--theme-black-primary);
  }

  &:after {
  content: "";
  /* content: ${({ btntype }) => btntype === 'btn' ? `""` : ""}; */
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, var(--theme-black), var(--theme-black), var(--theme-black));
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 0% 100%;
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  transition: background-size 300ms ease-in-out, color.2s linear;
  border-radius: 2.875rem;
}
&:hover:after {
  background-position: left center;
  background-size: 100% 100%;
}
&:hover {
   color: var(--theme-white);
   border-color: #0000;
   & img{
    filter: ${({ btntype }) => btntype === 'icon' ? "invert(1)" : "invert(0)"};
   }
}



}

/* &:before{
		content:"" ;
		background: url(${require("../images/arrow-black-icon.svg").default}) center/contain no-repeat ;  
		display: block;
		--btn-after-size:1rem;
		width: var(--btn-after-size);
		height: var(--btn-after-size); 
		rotate: 45deg;
    transition: background-position 200ms ease-in   ; 
    position: absolute;
    right:1rem;
    top:1rem;
    transition:  300ms ease-in-out;
    z-index: -1;
	}
  &:hover:before{
    right:-.5rem;
    top:-.5rem;
  } */

  @media screen and (max-width: 768px) {
    & :is(a,button){
      font-size: .9rem;
      padding: ${({ btntype }) => btntype === 'icon' ? '0.63rem 0.5rem' : `0.5rem 1.2rem`}; 
    }
  }


`;


export const ScrollAnimParaWrap = styled.div`
 /* position: sticky; */
 /* top: ${"window.innerHeight" / 5 + 'px'}; */

& p{
	/* color:var(--theme-black-secondary); */
	text-align: center;
	font-family:"Inter-Medium";
	font-size: 2rem;
	line-height:156.25% ;
	letter-spacing:-0.0375rem;
	&:not(:last-child){
		margin-bottom:4rem;
	}

  & span{
    color: currentColor;
  }

}
@media screen and (max-width: 768px) {

  top: ${window.innerHeight / 7 + 'px'};

  & p{
    font-size: 1.375rem; 
    text-align: left;
  }
}

`;


export const VideoCardsWrap = styled.div`
  ${'' /* display: grid;
  gap: 8rem 7.25rem;  
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));  
  grid-template-rows: masonry;  */}

  gap: clamp(1.5rem, 5rem, 7.25rem);
    columns:   24.875rem;

& >*{
  break-inside:avoid;
}


`;

export const CardTop = styled.div`
width:100%;
margin-bottom: 2rem;
position: relative;
clip-path: polygon(0 50%, 100% 0%, 100% 50%, 0% 100%);
transition: 200ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
filter: blur(20px) grayscale(1);
opacity: 0;


&.scroll-anim-card.active-card{
  clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
  filter: blur(0px) grayscale(0);
opacity: 1;
transition: 800ms linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%);

}

& :is(img,video){
  position: absolute;
  left: 0;
  top: 0;
  width:100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  z-index: 0;
 scale: 1;
 transition: 400ms ease-in-out;
}
& video{
  opacity: 0;
}
& img{
  opacity: 1;
}

&:hover video{
opacity: 1;
border-radius: 0rem;
}
&:hover img{
  scale: 1.1;
opacity: 1;
border-radius: 0rem;
}

@media screen and (max-width:768px){
  margin-bottom: 1.21rem;
}

`;

export const CardItems = styled.div`
position: relative;
width:100%;


&:hover ${CardTop}{ 
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
}

&:hover img{
  scale: 1.1;
border-radius: 0rem;
}

& *{
  color: var(--theme-white);
}

&:not(:last-child)  {
margin-bottom:8rem;
}
&:nth-child(5n+1) ${CardTop}, &:nth-child(5n+3) ${CardTop}{
  height: 38.375rem;
}
&:nth-child(5n+5) ${CardTop}, &:nth-child(5n+2) ${CardTop}, &:nth-child(5n+4) ${CardTop}{
  height: 26.25rem;
}


@media screen and (max-width:768px){
  &:not(:last-child)  {
margin-bottom:4rem;
}
      &:nth-child(5n+1) ${CardTop}, &:nth-child(5n+3) ${CardTop}, &:nth-child(5n+5) ${CardTop}, &:nth-child(5n+2) ${CardTop}, &:nth-child(5n+4) ${CardTop}{
        height: 23.15244rem;
     }

  }

`;

export const CategoryBullets = styled.div`
/* position: absolute;
top: 0;
left: 0; */
/* z-index: 11; */
/* padding: 1.5rem; */
display: block;
margin-bottom: 1.5rem;
& span{
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.25rem 1rem;
  border-radius: 3.3125rem;
  background-color: var(--theme-primary);
  color: var(--theme-black-primary);
  text-transform: uppercase;
}

@media screen and (max-width: 768px){
  ${'' /* padding: .9rem ; */}
  margin-bottom: 1rem;
  & span{
    padding: 0.15rem 0.6rem;
    font-size: 0.52788rem;
  }
}

`;
export const CardBottom = styled.div`

& h6{
  font-family: "Inter-Tight-Bold";

  & span{
    font-family: "Inter-Tight-Regular"; 
  }
}
@media screen and (max-width: 768px){
  & h6{
    /* font-size: 0.82956rem; */
    line-height: 145.455%;
  }  
}
`;


export const CheckIconList = styled.ul`
 list-style: none;
 padding-left: 1.5rem ;

 & li{
  position: relative;
  font-size: 1.125rem;
  color: #565656;
  
  &:after{
    content: '';
    background: url(${require('../images/yellow-check-icon.svg').default}) center/contain no-repeat;
    left: -1.5rem;
    top: .3rem;
    position: absolute;
    width: 1.0625rem;
    height: 1.0625rem;
  }
}

 `;


export const CTAWithContentBar = styled.div`
padding: 3rem;
border-radius: 1.5rem;
& p{
  font-size: 1.25rem;
}

@media screen and (max-width: 768px){
  padding: 2.38rem  ;
}

`;

export const MidHeadingCTA = styled.span`
& > *{
  font-size: 1.375rem;
  font-family: "Inter-Tight-Medium";
  line-height: 1.75rem;
  text-transform: uppercase;
  max-width: 12.6875rem;
  padding: 1.4rem 2.6rem;
  border-radius: 7.125rem;
  background-color: var(--theme-black-secondary);
  display: inline-block;
  color:var(--theme-white) ;
}

@media screen and (max-width: 768px){
  & > *{
    font-size: 1rem;
    padding: 1rem 1.6rem;
  }
}
`;


export const FloatingBtn = styled.div`
position: fixed;
right:3rem;
bottom: 3rem;
  z-index:9999;

& .lets-talk-cta{
  display:flex;
  align-items: center;
  justify-content: center;
  width: 7.39988rem;
height: 7.39988rem;
scale:0;

  & img{
    position: absolute;
    
    &.img-one{
      animation:RotateLoop linear 10s infinite;
    }
  }

&:hover {
   & img{
    filter: grayscale(1) invert(1);
   }
}
}


@keyframes RotateLoop{
from{
  rotate: 0deg;
}
to{
  rotate: 360deg;
}
}


@media screen and (max-width: 768px){ 
  right: 1.5rem;
  bottom: 1.5rem;
  & .lets-talk-cta{

    & img{ 
      aspect-ratio: 1 / 1;
      &.img-one{
        width: 6rem;
       
      }
      &.img-two{ 
        width: 2rem;
      }
    }
  }
}


`;