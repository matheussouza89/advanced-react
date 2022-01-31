import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
 }

 html{
  font-size: 62.5%;
 }

 html, body, #__next {
  height: 100%;
 }

 body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
`
export default GlobalStyle
