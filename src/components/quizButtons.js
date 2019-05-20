import React from "react"
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import styled from 'styled-components'
import { ThemeProvider } from "styled-components"
import theme from './themes'


// import * as Animatable from 'react-native-animatable'

 var score = [0,1,2,3,4];



function addOne(){
 score[0] = score[0] + 5
 console.log(score)
 console.log("here")

}
const Move = styled.div`
margin-left: ${props => props.theme.marginS};


`

const QuizButtons = (Text ) => (
  <ThemeProvider theme={theme}>
    <Move>
    <RadioGroup horizontal>
  <RadioButton  >
    1
  </RadioButton> 

  <RadioButton value="2"  onClick={() => {
         addOne()
    }}>
    2 
  </RadioButton>
  <RadioButton value="3" onclick={score[2] + 3}>
    3 
  </RadioButton>
  <RadioButton value="4" onclick={score[3] + 4}>
    4
  </RadioButton>
  <RadioButton value="5" onclick={score[4] + 5}>
    5
  </RadioButton>

</RadioGroup>
 </Move>
</ThemeProvider>
  
)




export default QuizButtons

