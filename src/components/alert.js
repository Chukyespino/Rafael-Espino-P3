import React from 'react'
import { useAlert } from 'react-alert'
import styled from 'styled-components'
import { ThemeProvider } from "styled-components"
import theme from './themes'

const AB = styled.button`
color: ${props => props.theme.themecolor};
background-color: ${props => props.theme.backgroundcolor};
 border: ${props => props.theme.border}; 
 width:${props => props.theme.width};
 height:${props => props.theme.height};
 font-size:${props => props.theme.font};
 margin-bottom:${props => props.theme.marginM};
 
 margin-right:${props => props.theme.marginS};
 border-radius:${props => props.theme.radius} ;
 border-color:${props => props.theme.buttonBlue};
 box-shadow: ${props => props.theme.boxShadowblue};
`;

const Alerts = () => {
  const alert = useAlert() 
  return (
    <ThemeProvider theme={theme}>
    <AB 
      onClick={() => {
      
        alert.show('function unavailable... Please sum your score manually');
        
      }}
      
    >
      Score
    </AB>
  </ThemeProvider>
  )
}
 
export default Alerts