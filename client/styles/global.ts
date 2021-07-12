import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url('/assets/background.svg') no-repeat center top ;
  }

  html, body, input, button {
     font-family: 'Roboto', sans-serif;

  }

  #root, #__next {
     max-width: 1020px;
    /* margin: 0 auto; */
    padding: 0 20px 50px;
    /* margin: 0 0; */
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`
