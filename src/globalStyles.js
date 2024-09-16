import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap');


* {
margin:0;
padding:0;
box-sizing:border-box;
}

body {
   min-height:100vh;
   
   display:flex;
   justify-content:center;
   align-items:center;
   background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
   font-family: "Kumbh Sans", sans-serif;
}

html {
font-size:62.5%
}

.question-div {
  border-bottom: 1px solid red;
}

.question {
  cursor: pointer;
}


`;

export default GlobalStyles;
