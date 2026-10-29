import {styled , createGlobalStyle} from "styled-components";


export const LoadingAnimationStyle = createGlobalStyle`
  

.loading-anim {
  width: 100%;
  height: 100vh; 
  background-color: var(--theme-primary);
  position: absolute; 
  ${'' /* pointer-events: none; */}
}

.pre-loader {
  width: 100%;
  height: 100%;
  padding: 3rem;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  z-index: 2;
}

.pre-loader p {
  width: 100%; 
  font-family: 'Inter-Tight-Regular';
  font-size: 3rem;
  line-height: 100%;
}
 

.counter {
  height: 4rem; 
  display: inline-flex;
  font-family: 'Inter-Tight-Bold';
  font-size: 4rem; 
  line-height: 150%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  translate: 0 28px;
}
.counter span {
    display: block;
    transition:none;
}
.counter > span {
  position: relative;
  top: -22px; 
}
.counter .num.offset {
  position: relative;
  right: -7.5px;
}

.progress-bar {
  position: relative;
  top: -15px;
  width: 0;
  height: 4px;
  background-color: #2d2d2d;
}
.loader-counter { 
    bottom: 0;
    right: 0;
    padding: 3rem; 
    width: 200%; 
    padding: 2rem;
    position: absolute; 
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0.5rem;
    overflow: hidden;
    z-index: 2;
}

.loader-counter p {
     width: max-content;
}
.hero-imgs img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  left:0;
  top:0;
  transition: none;
}

.hero-imgs {
    display: inline-block;
    position: relative;
    width: 230px;
    height: auto;
    overflow: hidden;
    border-radius: 10rem;
    z-index: 11;
    top: 1rem;
}

@media screen and (max-width: 992px) {
    .hero-imgs {
        display:  block;
        margin-bottom:3rem ;
        width:100%;
    }
 
  .pre-loader {
    padding: 0rem;
  }
  .counter {
    height: 2.5rem;
    font-size: 2.5rem;
    translate: 0 15px;
  }
  .counter > span { 
  top: -11px; 
}
  .pre-loader p {
    font-size: 1.2rem;
  }
  .loader-counter {
    padding: 1.5rem;
  }
}



`;