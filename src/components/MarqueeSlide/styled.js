import { styled } from 'styled-components';


export const MarqueeStripList = styled.div`
padding: 0;
display: flex;
gap: 4.2rem;
width: max-content;
margin-right: 1rem;

animation : infinite-RTL 10s linear infinite;

&:hover{
    animation-play-state: paused;
}

&  >div{
    color: var(--theme-white);
}

/* &  >div:after {
content: "";
width: 2rem;
height: 2rem;
background: url("../images/4-points-black-star-icon.webp") center/contain
  no-repeat;
position: relative;
top: .3;
margin-left: .8rem;
display: inline-block;
} */

@media screen and (max-width: 768px) {
    gap: 2.36rem;
} 

`;

export const MarqueeStripRow = styled.div`
display: flex;
width: max-content; 
padding: 2.5rem 0;

&:nth-child(even){
    background-color: var(--theme-white);

& ${MarqueeStripList} > div {
    color:var(--theme-black);
}
}

@media screen and (max-width: 768px) {
    padding: 1.40rem 0;

}

`;
