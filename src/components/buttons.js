import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from "styled-components"
import theme from './themes'

const DB = styled.button`
color: ${props => props.theme.themecolor};
background-color: ${props => props.theme.backgroundcolor};
 border: ${props => props.theme.border}; 
 width:${props => props.theme.width};
 height:${props => props.theme.height};
 font-size:${props => props.theme.font};
 border-radius:${props => props.theme.radius} ;
 border-color:${props => props.theme.buttonBlue};
 box-shadow: ${props => props.theme.boxShadowblue};
 
`;

const Button = ( ) => (
    <ThemeProvider theme={theme}>
<DB
onClick={() => {
         window.location.href="./results"
    }}
>Results
</DB>    
</ThemeProvider>
)




export default Button


