import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

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
  /* noto-sans-regular - latin_latin-ext */
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Noto Sans'), local('NotoSans'),
         url('fonts/noto-sans-v9-latin_latin-ext-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('fonts/noto-sans-v9-latin_latin-ext-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* noto-sans-700 - latin_latin-ext */
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Noto Sans Bold'), local('NotoSans-Bold'),
         url('fonts/noto-sans-v9-latin_latin-ext-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('fonts/noto-sans-v9-latin_latin-ext-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  
  @font-face {
    font-family: 'icomoon';
    src:  url('fonts/icomoon.eot?qr7jj6');
    src:  url('fonts/icomoon.eot?qr7jj6#iefix') format('embedded-opentype'),
      url('fonts/icomoon.ttf?qr7jj6') format('truetype'),
      url('fonts/icomoon.woff?qr7jj6') format('woff'),
      url('fonts/icomoon.svg?qr7jj6#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  
  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-envelope:before {
    content: "\\e900";
  }
  .icon-phone:before {
    content: "\\e942";
  }
  .icon-location:before {
    content: "\\e947";
  }
  .icon-earth:before {
    content: "\\e9ca";
  }
  .icon-heart:before {
    content: "\\e9da";
  }
  .icon-facebook2:before {
    content: "\\ea91";
  }
  .icon-github:before {
    content: "\\eab0";
  }
  .icon-linkedin:before {
    content: "\\eac9";
  }
  .icon-stackoverflow:before {
    content: "\\ead0";
  }

`;
