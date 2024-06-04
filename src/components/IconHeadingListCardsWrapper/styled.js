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

`;
export const ContentBottom= styled.div`
padding: 1.5rem 2rem;

`;


export const CTAWithContentBar = styled.div`
`;
