import { styled } from "styled-components";

export const IconHeadingListCardsWrap= styled.div``;
export const IconHeadingListCards= styled.div`
border-radius: 1.5rem;
overflow: hidden;
background-color: var(--theme-white);
height: 100%;
width:calc(100% - 2rem);
margin: 0 auto;

@media screen and (max-width: 768px) {
width:  100%;
}
`;
export const ContentTop= styled.div`
padding: 2rem 2rem 1.5rem 2rem;
background-color: #FFFEF5;

&  svg{
    width:5.5rem!important;
    height: 5.5rem!important;
    margin-bottom:1rem;
}
& h5{
    margin-bottom:.5rem;
    font-size: 1.875rem;
    font-family: "Inter-Tight-SemiBold";
}
& p{
    margin-bottom: 0;
    font-size: 1.125rem;
    color: rgba(18, 18, 18, 0.56);


}

@media screen and (max-width: 768px) {
    padding: 1.31rem 1.75rem;

    & :is( svg, h5){
        margin-bottom:  .44rem;
    }
    & p{font-size: 0.98231rem;}
}

`;
export const ContentBottom= styled.div`
padding: 1.5rem 2rem;
@media screen and (max-width: 768px) {
    padding: 1.31rem 1.75rem;
    }
`;


export const CTAWithContentBar = styled.div`
`;


export const IconCardsSwiper = styled.div`

& .swiper{
    /* padding-bottom: 70px; */

    & .swiper-slide:not(:last-child) > div{
        width:calc(100% -  1rem); 
    }
}

& .swiper-bullets-tab{
    display:flex;
    justify-content:center;
    align-items:center;
    gap: .56rem;
    margin-bottom: 1.39rem ;

    /* position: sticky;
    top: ${window.innerHeight - 70}px ;
    z-index: 11; */


    & span{
        display:inline-block;
        padding: .21rem .85rem;
        font-size: 0.74381rem;
        line-height: 171%;
        text-transform: uppercase;
        background-color: var(--theme-white);
        border-radius: 2.17825rem;
        
        &.swiper-pagination-bullet-active{
            color:var(--theme-white);
            background-color: var(--theme-black-primary);
        }

    }
}

`;