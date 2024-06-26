import {  createGlobalStyle} from "styled-components"

export const GlobalColorsStyle = createGlobalStyle`


:root {

--theme-black: #000000;
--theme-white: #ffffff;
--theme-black-primary: #161616;
--theme-black-secondary: #121212;
--theme-gray:#7D7D7D;
 
--theme-primary: #FFEE4F;

--theme-success: #078345;
--theme-warning: #FF9900;
--theme-error: #D53B3B; 

--theme-yellow-cream: #FFFEF5;

}



.theme-text-success{
color:var(--theme-success);
}
.theme-text-error{
color:var(--theme-error);
}
.theme-text-gray{
color:var(--theme-gray);
}
.theme-text-primary{
color:var(--theme-primary-600);
}

.theme-text-white{color:var(--theme-white);}

.theme-text-black{color:var(--theme-black);}

.theme-text-black-primary{color:var(--theme-black-primary);}
.theme-text-black-secondary{color:var(--theme-black-secondary);}


.theme-bg-black-primary,.curve-bg-black-primary:after{ background-color:var(--theme-black-primary);}
.theme-bg-black-secondary,.curve-bg-black-secondary:after{ background-color:var(--theme-black-secondary);}
.theme-bg-primary, .curve-bg-primary:after{ background-color:var(--theme-primary);}
.theme-bg-white, .curve-bg-white:after{ background-color:var(--theme-white);}

.theme-bg-yellow-cream, .curve-bg-yellow-cream:after{background-color:var(--theme-yellow-cream);}
 
${'' /* 
.theme-bg-lotion, .curve-bg-lotion:after{
    background-color:var(--theme-lotion);
}
.theme-bg-ghost-white, .curve-bg-ghost-white:after{
    background-color:var(--theme-ghost-white);
}
.theme-bg-snow, .curve-bg-snow:after{
    background-color:var(--theme-snow);
}
.theme-bg-white, .curve-bg-white:after{
    background-color:var(--theme-white);
} */}

 

`;