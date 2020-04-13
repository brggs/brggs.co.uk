import { createGlobalStyle } from "styled-components"

var darkBlue = '#2a394f';
var midBlue = '#78a6c8';
var lighterBlue = '#b5d4ea';
var lightBlue = '#e9eef2';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    margin: 0;  
    background-color: ${darkBlue};
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: ${lightBlue};
    font-family: 'Gelasio';
    font-size: 19px;
  }

  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
  }
  
  a {
    font-style: normal;
    text-decoration: none;
    color: ${midBlue};
    boxShadow: "none";
  }

  a:hover {
    color: #e9eef2;
  }

  h1, h2 {
    font-family: 'Lato';
    font-weight: 700;
    letter-spacing: 1.2px;
  }

  h1 {
    font-size: 40px;
    color: ${lighterBlue};
  }

  h2 {
    font-size: 30px;
    color: ${midBlue};
  }

  h3 {
    font-family: 'Lato';
    color: ${lighterBlue};
  }
  
  blockquote {
    margin-left: -1.75rem;
    margin-right: 1.75rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.4rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-size: 1.2rem;
    line-height: 1.75rem;
    color: #c1e2fd;
    font-style: italic;
    border-left: 0.33rem solid
  }

  table {
    margin: 0 auto;
  }

  th {
    padding: 5px;
    font-family: 'Lato';
    color: ${lighterBlue};
  }
  
  td {
    padding: 5px;
    min-width: 60px;
  }

  code[class*="language-"] {
    font-size: 14px;
  }

  .gatsby-highlight {
    padding: 1em;
  }

  .gatsby-highlight pre[class*="language-"] {
    max-width: none;
    padding: 1.5em;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .gatsby-highlight pre[class*=language-] code {
    width: 680px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
`

export default GlobalStyle