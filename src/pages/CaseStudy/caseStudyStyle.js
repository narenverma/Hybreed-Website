import {styled, createGlobalStyle} from "styled-components";


export const CaseStudyGlobalStyle = createGlobalStyle`
.theme-bg-focusu-primary{
background-color: var(--focusu-cs-primary);
}
.theme-bg-focusu-secondary{
background-color: var(--focusu-cs-secondary);
}
.theme-bg-equizen-primary{
background-color: var(--equizen-cs-primary);
}
.theme-bg-equizen-secondary{
background-color: var(--equizen-cs-secondary);
}
.theme-bg-mercer-primary{
background-color: var(--mercer-cs-primary);
}
.theme-bg-mercer-secondary{
background-color: var(--mercer-cs-secondary);
}
.theme-bg-lifecrafting-primary{
background-color: var(--lifecrafting-cs-primary);
}
.theme-bg-lifecrafting-secondary{
background-color: var(--lifecrafting-cs-secondary);
}
.theme-bg-4pcapital-primary{
background-color: var(--4pcapital-cs-primary);
}
.theme-bg-4pcapital-secondary{
background-color: var(--4pcapital-cs-secondary);
}

.theme-bg-turbohire-primary{
background-color: var(--turbohire-cs-primary);
}
.theme-bg-turbohire-secondary{
background-color: var(--turbohire-cs-secondary);
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
gap: 1.37rem;
/* align-items: center; */


& h6{
    font-family: 'Inter-Tight-SemiBold';
    font-size: 1.375rem;
    padding: .38rem 0;
}

&.dark-list ul li{
    color:var(--theme-white);
}

& ul{
    list-style: none;
    display: flex;
    align-items: center;
    gap: .94rem;
    flex-wrap: wrap;
    padding-left: 0;

    & li {
        margin-bottom: 0!important;
        line-height: 177.778%;
        padding: .38rem 2rem;
        border-radius: 2.25rem;
        background-color: var(--list-color);
        font-size: 1.125rem;
        color: var(--theme-black);
        font-family: "Inter-Tight-Regular";
    }
}

@media screen and (max-width: 768px) {

    flex-direction: column;
    gap: 1rem;

    & h6{
        font-size: 1rem;
        padding: 0;
    }
    & ul{
        gap: .5rem;
        & li {
            padding: 0rem .8rem;
            font-size: .9rem;
        }
    }
}

`;
export const BannerAnimationWrap = styled.div`
width: 100%;
/* height: 40.5rem; */
margin-top: 4rem;

& img{
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}
@media screen and (max-width: 768px) {
    margin-top: 3rem;
}
`;

export const CaseStudyContentSection = styled.section`
& .sub-head{
    font-family: 'Inter-Regular';
    line-height: 154.545% ;
}
`;
export const CaseStudyContentWrap = styled.div``;

export const AnimationCards = styled.div`
& .row>*{
margin-top: 2.5rem;
padding-right: 1.25rem;
padding-left: 1.25rem;
}

@media screen and (max-width: 768px) {
    & .row>*{
        margin-top: 1.5rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }
}

`;
export const AnimCardItem = styled.div`
width:100%;
/* height: 40.5rem; */

& *{
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    border-radius: 1rem;
    /* overflow: hidden; */
}

`;

export const CaseStudyTestimonialSection = styled.section``;
export const CaseStudyTestimonialWrap = styled.div`
& .row> *{
    --gap-space: 3.37rem;
    margin-top: var(--gap-space);
    padding-right: calc(var(--gap-space) / 2);
    padding-left: calc(var(--gap-space) / 2);
}

`;
export const TestimonialImg = styled.div`
width:100%;

& img{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}

@media screen and (max-width: 768px) {
    /* height: 30rem; */
    & img{
        object-fit: cover;
    }
}

`;
export const TestimonialContent = styled.div`

& *{
color: var(--theme-white);
}



& .para-reveal-wrap p{
    font-size: 2rem; 
    line-height: 156.25%;
    letter-spacing: -0.0375rem;
    margin-bottom: 5.62rem;
}

& > p{
    font-size: 1.25rem;
    margin-bottom: 0;
}

@media screen and (max-width: 768px) {
    & .para-reveal-wrap p{
        font-size: 1.3rem;
        margin-bottom: 3rem;
    }
    & p{
        font-size: 1rem;
        margin-bottom: 0;
    }
}

`;