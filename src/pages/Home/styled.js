import { css, styled } from "styled-components";

export const HomeHeroSection = styled.section``;
export const HomeHeroWrap = styled.div`
position: relative;
`;
const positionAbsolute = css`
position:absolute;
 z-index: -1;
top:100%;
translate: 0 -40%;
width: 180vmin;
height: 180vmin;
animation: moveLeftRight 10s ease-in-out infinite;

& img{
    width:100%;
    height:100%;
    object-fit: contain;
}

@keyframes moveLeftRight {
    0%{
        translate: 0 -40%;
    }
    50%{
        translate: var(--transX) -40%;
    }
    100%{
        translate: 0 -40%;
    }
}

`;

export const BgElemOne = styled.div`
${positionAbsolute}
left:-20%;
--transX: 60%;
`;
export const BgElemTwo = styled.div`
${positionAbsolute}
right:-20%;
--transX: -60%;
`;



export const GridFreeAnimCarousel = styled.div``;
export const CarouselWrap = styled.div`
        display: grid;
        grid-template-rows: auto auto;
        grid-auto-flow: column;
        gap: 1rem;
        width: max-content;

        animation: infinite-RTL 10s linear infinite;




    `;
export const SlideItems = styled.div`
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.5rem;
        }

        &:nth-child(3n + 1) {
            grid-row-start: 1;
            grid-row-end: span 2;
            height: 29.25rem;
        }
        &:nth-child(3n + 2) {
            grid-row-start: 1;
            grid-row-end: 1;
            height: 14.125rem;
        }
        &:nth-child(3n + 3) {
            grid-row-start: 2;
            grid-row-end: 2;
            height: 14.125rem;
        }

@media screen and (max-width: 768px) {
    &:nth-child(3n + 1){ 
        height: 19.27219rem;
    }
     &:nth-child(3n + 2), &:nth-child(3n + 3) {
        height: 9.30669rem;
    }

}

    `;

export const ClientsLogoWrap = styled.div``;
export const LogosWrap = styled.div`
        gap: 4.2rem 0;
    `;
export const LogoItem = styled.div`
        text-align: center;

        & .swiper-slide:not(.swiper-slide-active){
            opacity:0!important;
            transition: 300ms ease-in-out  ;
            
        }
        & .swiper-slide.swiper-slide-active{
            opacity: 1!important;
            /* scale: 1; */
            /* translate: 0 0% !important; */
        }
        /* & .swiper-slide-next{
            translate: 0 50% !important;
        }
        & .swiper-slide-prev{
            translate: 0 -50% !important;
        }  */
        
    `;

export const FeaturedWorkSection = styled.section``;
export const FeaturedWorkWrap = styled.div``;

export const MarqueeStripSection = styled.section``;

export const MiddleContentSection = styled.section``;
export const MiddleContentWrap = styled.div`
        & p {
            font-size: 2.5rem;
            line-height: 120%;
            font-family: "Inter-Medium";
        }
        @media screen and (max-width: 768px) {
            & p {
                font-size: 1.4rem;
            }
            
        }
    `;

export const MiddleContentImage = styled.div`
position: sticky;
top: ${window.innerHeight / 5 + 'px'};
`;

export const ServicesSection = styled.section``;

export const BeforeFooterCtaSection = styled.section``;
export const BeforeFooterCtaWrap = styled.div`
        & h2 {
            font-size: 6.5rem;
        }
        @media screen and (max-width: 768px) {
            & h2 {
                font-size: 2rem;
            }
            
        }
    `;

export const ProductsImgTile = styled.div`
    position: fixed;
    width: 16.5rem;
height: 19.125rem;
    left: 0;
    top: 0;
    transform: translate(-50%,-100%);
    z-index:111;
   

    & img{
        object-fit: cover;
        width:100%;
        height: 100%;
    }
`;


export const AboutSection = styled.section``;


  