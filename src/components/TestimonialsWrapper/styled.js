import {styled} from 'styled-components';

export const TestimonialsSection = styled.section``;
export const TestimonialsWrap = styled.div`
& .row div{
    transition: 400ms ease-out ;
}
& .row.transform-active > div{ 
    &:nth-last-child(1){
        rotate: 8deg;
        translate: -10% -40%;
    }
    &:nth-last-child(2){
        rotate: -8deg;
        translate: 10% -40%;
    }
    &:nth-child(1){
        rotate: -8deg;
        translate: 20% 0%;
    }
    &:nth-child(3){
        rotate: 8deg;
        translate: -20% 0%;
    }
}

@media screen and (max-width: 992px) {
    & .row.transform-active > div{
        rotate:0 !important;
        translate: 0 0 !important;
    }
}

`;
export const CardItems = styled.div`
padding: 2.5rem;
border-radius: 1.42288rem;
background-color: var(--bgColor);
box-shadow: 0px 18.972px 37.943px 0px rgba(0, 0, 0, 0.06);
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1rem;
 
& *{color: var(--textColor)}

 
 
@media screen and (max-width: 768px) {
    padding: 1.51rem;
    gap: .86rem;
}

`;
export const CardTop = styled.div`
 
& img{
    margin-bottom: 1rem;
    height: 3rem;
    width: 100%;
    object-fit: contain;
    object-position: bottom;
}
& p{
    font-size:1rem;
    letter-spacing: -0.05931rem;
    line-height: 162%;
    margin-bottom: 0;

    &:not(:last-of-type){
        margin-bottom: 1rem;       
    }
}
`;
export const CardBottom = styled.div`
& h6{
    font-size: 1rem;
    font-family: "Inter-Bold";
    line-height: 150%;
}
& p{
    font-family: "Inter-SemiBold";
    font-style: italic;
    font-size: 0.875rem;
    margin-bottom:0;
    line-height: 185.714%;
    letter-spacing:-0.05931rem;
}
`;


export const TestimonialsCardSwiper = styled.div`

& .swiper-cards .swiper-slide-shadow{
    border-radius: 1.42288rem;
    background-color: #0001;
}

& .swiper-cards .swiper-slide:not(.swiper-slide-visible){
filter: blur(2px);
}
`;