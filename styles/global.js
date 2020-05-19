import { injectGlobal } from "styled-components"
import { font, breakpoint, colour } from "./variables"
import styled from "styled-components"

injectGlobal`

  @font-face {
    font-family: "Lato Bold";
    src: url("/static/fonts/Lato-Bold") format("ttf");
    font-weight: 700;
  }
  @font-face {
    font-family: "Lato Black";
    src: url("/static/fonts/Lato-Black") format("ttf");
    font-weight: 400;
  }
  @font-face {
    font-family: "Lato Light";
    src: url("/static/fonts/Lato-Light") format("ttf");
    font-weight: 200;
  }

  html,
  body {
    font-weight: ${font.weight.book};
    line-height: 1.5625;
    font-size: ${font.size.desktop.base};
    font-family: "Lato", sans-serif;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    scroll-behavior: smooth;
    color: ${colour.white};
    background-color: ${colour.black};

    input:-internal-autofill-selected {
      background-color: transparent !important;
      background-image: none !important;
      color: rgb(0, 0, 0) !important;
    }
    
    @media (max-width: ${breakpoint.max.medium}) {
      font-size: ${font.size.mobile.base};
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  #__next,
  body {
    overflow-x: hidden;
  }

  #__next {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font-size: inherit;
  }

  ul,
  ol,
  figure {
    padding: 0;
    margin: 0;
  }

  h3 {
    font-size: 20px;
  }

  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .storefront-loading {
    padding: 0 4%;
    margin: 3vw 0;
    min-height: 150px;
    display: flex;
    align-items: center;
  }
`

export const Layout = styled.div`
  padding: 1% 4%;
`
