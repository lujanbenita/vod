import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Barna";
    src: local("Barna-Regular.ttf"),
      url("Barna-Regular.ttf") format("truetype");
    font-weight: 400;
  }

  html {
    font-size: 10px;
    font-size: 62.5%; // 1rem = 10px
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Barna", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
`;

export default GlobalStyle;
