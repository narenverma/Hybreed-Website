import {styled, createGlobalStyle} from "styled-components";


export const CaseStudyGlobalStyle = createGlobalStyle`
.theme-bg-focusu-primary{
background-color: var(--focusu-cs-primary);
}
.theme-bg-focusu-secondary{
background-color: var(--focusu-cs-secondary);
}

`;

export const CaseStudyHeroSection = styled.section``;
export const CaseStudyHeroWrap = styled.div`
& h1{
    margin-bottom: 2.5rem;
}
`;
export const CategoriesList = styled.div`
display: flex;
align-items: center;

& h6{
    font-family: 'Inter-Tight-SemiBold';
    font-size: 1.375rem;
}

& ul{
    list-style: none;
    display: flex;
    align-items: center;
    gap: .94rem;

    & li {
        margin-bottom: 0!important;
        line-height: 177.778%;
        padding: .38rem 2rem;
        border-radius: 2.25rem;
        background-color: var(--focusu-cs-secondary);
        font-size: 1.125rem;
        color: var(--theme-black);
    }
}

`;
export const BannerAnimationWrap = styled.div`
width: 100%;
height: 40.5rem;
margin-top: 4rem;

& img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`;

export const CaseStudyContentSection = styled.section`
& .sub-head{
    font-family: 'Inter-Medium';
}
`;
export const CaseStudyContentWrap = styled.div``;

export const AnimationCards = styled.div`
& .row>*{
margin-top: 2.5rem;
padding-right: 1.25rem;
padding-left: 1.25rem;
}
`;
export const AnimCardItem = styled.div`
width:100%;
height: 40.5rem;

& img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
}

`;

export const CaseStudyTestimonialSection = styled.section``;
export const CaseStudyTestimonialWrap = styled.div``;
export const TestimonialImg = styled.div``;
export const TestimonialContent = styled.div`

& *{
color: var(--theme-white);
}

& h6{
    font-size: 2rem; 
    line-height: 156.25%;
    letter-spacing: -0.0375rem;
    margin-bottom: 5.62rem;
}

& p{
    font-size: 1.25rem;
}

`;