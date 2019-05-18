import React from 'react'
import List from "../../src/pages/list"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'
import theme from './themes'

const Red = styled.div`
  color: ${props => props.theme.themecolor};
  background: transparent;
  border: 5px solid;
  border-color: ${props => props.theme.themeRed} ;
  position: 'fixed';
  font-size: 50px;
  float: left;
  display: block;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  text-align: center;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  
  `;


const Yellow = styled.div`
  color: ${props => props.theme.themecolor};
  background: transparent;
  border: 5px solid;
  border-color: ${props => props.theme.themeYellow} ;
  font-size: 50px;
  float: left;
  display: block;
  text-align: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  
  `;

const Green = styled.div`
  color: ${props => props.theme.themecolor};
  background: transparent;
  border: 5px solid;
  border-color: ${props => props.theme.themeGreen} ;
  font-size: 50px;
  float: left;
  display: block;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  text-align: center;
  padding-right:20px;
  padding-left: 50px;
  padding-bottom: 10px;
  
  `;

  const listdisplay =()=> (
      <div>
        <ul id="main" className="listTop">
       <h1> <b> Self-Care Checklist</b> </h1>
       
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