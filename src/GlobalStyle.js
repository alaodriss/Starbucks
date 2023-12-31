import { createGlobalStyle } from 'styled-components/macro'


const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Santana'; 
    src: url('./assets/fonts/Santana-Black.ttf') format('truetype'),
         url('./assets/fonts/Santana-Black.ttf') format('truetype');
  }


  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, main, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }


  * {
    box-sizing: border-box;
  }


  body {

    background-color: #FFF;
    font-family: monospace;
    -webkit-font-smoothing: antialiased;
  }

  li{
    list-style-type: none;
  }

  a {
    text-decoration: none;
    outline: none;
  
  }
`
export default GlobalStyle