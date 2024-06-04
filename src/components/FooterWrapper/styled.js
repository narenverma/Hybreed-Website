import styled from "styled-components";

export const FooterSection = styled.div`
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8rem;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 0.5rem;

  & p {
    line-height: 228.571%;
    margin-bottom: 0;
    letter-spacing: -0.00875rem;
    font-size: 1rem;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.12rem;
  flex-wrap:wrap;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
  
`;

export const FooterLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.94rem;
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

export const QuotesWrap = styled.div`
  flex-direction: column;
  display: flex;
  gap: 1.5rem;
  & h3 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-style: italic;
  }

  & p {
    text-align: end;
    font-size: 1.25rem;
  }
`;



