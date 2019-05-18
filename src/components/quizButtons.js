import React from "react"
import { RadioGroup, RadioButton } from 'react-radio-buttons'

var score = [0,1,2,3,4];



function addOne(){
 score[0] = score[0] + 5
 console.log(score)
 console.log("here")

}
// function add2(){
//   score[0] + 1
//  }
//  function add3(){
//   score[0] + 1
//  }
//  function add4(){
//   score[0] + 1
//  }
//  function add5(){
//   score[0] + 1
//  }

const QuizButtons = () => (
    <div className="move">
    <RadioGroup horizontal>
  <RadioButton on>
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
  </div>
  
)




export default QuizButtons

