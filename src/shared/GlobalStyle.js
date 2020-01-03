import { createGlobalStyle } from "styled-components"
import { Theme } from "./theme"
import "../fonts/fonts.css"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  } 
  
  body{
    margin: 0;
  } 
  
  html{
    font-family: 'Noto Sans', 'Segoe UI', Roboto, Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;  
    color: ${Theme.colors.main};  
    font-weight: 400;
    font-size: 14px;
  }
  
  h1, h2, h3, h4, h5, h6, p, ul, li, span, a {
    margin: 0;
    font-weight: 400;
    line-height: 1.6;  
    
    &.light{
      color: ${Theme.colors.mainLight};
    }
  }
  
  a {
    color: inherit;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.5s;
    
    &:hover {
      text-decoration-color: ${Theme.colors.main};
    }
    
    &.light:hover {
      text-decoration-color: ${Theme.colors.mainLight};
    }
  }
`
