import styled from "styled-components";


export const HeaderNavigationHeader = styled.div` `;
export const HeaderLogo = styled.div`
 & img{
    height: 2.5rem;
    width:auto;
 }
 @media screen and (max-width: 768px) {
    & img{
        height: 1.5rem; 
    }
 }
`;
export const NavigationWrap= styled.div``;
export const IconWrap= styled.div`
    text-align: center;
    gap: 1.12rem;

    @media screen and (max-width: 768px) {
        /* flex-wrap: wrap; */
        gap: 1rem;
        
    }
`;
