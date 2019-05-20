import React from 'react'
import List from "../../src/pages/list"
import { ThemeProvider } from "styled-components"
import theme from './themes'
import styled from 'styled-components'

const Title = styled.div`
color: ${props => props.theme.themecolor};
background: ${props => props.theme.backgroundcolor};
border: 1px solid;
width:61%;
font-size: 55px;
display: block;
border-radius: 25px;
box-shadow: 5px 10px 18px #888888;
padding-right:20px;
padding-left: 20px;
padding-bottom: 30px;
margin-bottom:50px;

`
const Red = styled.div`
  color: ${props => props.theme.themecolor};
  background: ${props => props.theme.backgroundcolor};
  border: 1px solid;
  border-color: ${props => props.theme.themeRed} ;
  position: 'fixed';
  font-size: 50px;
  float: left;
  display: block;
  border-radius: 25px;
  text-align: center;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  box-shadow: ${props => props.theme.boxShadowRed};
  margin-right: 30px;
  margin-bottom:50px;
  `;


const Yellow = styled.div`
  color: ${props => props.theme.themecolor};
  background: ${props => props.theme.backgroundcolor};
  border: 1px solid;
  border-color: ${props => props.theme.themeYellow} ;
  font-size: 50px;
  float: left;
  display: block;
  text-align: center;
  border-radius: 25px;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  box-shadow: ${props => props.theme.boxShadowYellow};
  margin-right: 30px;
  margin-bottom:50px;
  `;

const Green = styled.div`
  color: ${props => props.theme.themecolor};
  background: ${props => props.theme.backgroundcolor};
  border: 1px solid;
  border-color: ${props => props.theme.themeGreen} ;
  font-size: 50px;
  float: left;
  display: block;
  border-radius: 25px;
  text-align: center;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  box-shadow:  ${props => props.theme.boxShadowGreen};
  margin-bottom: 50px;
  margin-right: 30px;
  `;

  const listdisplay =()=> (
      <div>
        <ul id="main" className="listTop">
        <ThemeProvider theme={theme}>
       <Title> Self-Care Checklist</Title>
       </ThemeProvider>
            <ThemeProvider theme={theme}>
            <Red>High Priority<List/></Red>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
            <Yellow >Medium Priority<List/></Yellow>
             </ThemeProvider>
             <ThemeProvider theme={theme}>
            <Green>Rewards<List/></Green>
            </ThemeProvider>
          </ul>
      </div>
  )
  

  export default listdisplay;