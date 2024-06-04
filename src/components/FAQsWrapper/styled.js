import styled from "styled-components";

export const FAQsSection = styled.section``;
export const FAQsWrapper = styled.section``;
export const FAQsWrap = styled.section`

& .accordion-button:not(.collapsed), & .accordion-button{
background-color: #0000!important;
box-shadow: none  !important;
}
.accordion-button:after{
    background: url(${require("../../assets/images/arrow-top-icon.svg").default}) no-repeat center/auto;
    transform: rotate(180deg)!important;
}
.accordion-button:not(.collapsed)::after{
    transform: rotate(0deg)!important;
}
.accordion-button{
    padding: 1.5rem 1.5rem 0.5rem 1.5rem !important;
    transition: .3s ease-out;
    font-size: 1.25rem;
    line-height: 150%;
    font-family: "Inter-Tight-SemiBold";
}
.accordion-button.collapsed{padding: 1.5rem 1.5rem 1.5rem 1.5rem !important;}
& .accordion-item{
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.10);
    border: 0;
& *{
    color: var(--theme-white) !important;
}

&:not(:last-child){
    margin-bottom: 1rem;
}
}

& .accordion-body{
    padding: 0 1.5rem 1.5rem 1.5rem !important;

 & p{
    font-size:1rem;
    line-height: 150%;
    font-family: "Inter-Tight-Regular";
    letter-spacing: normal;
 }
}

`;