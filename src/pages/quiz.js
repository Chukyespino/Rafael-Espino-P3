import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import QuizB from "../components/quizButtons"
// import { any } from 'prop-types';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from '../components/alert'
 
// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  // timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const quizPage = () => (
  
  <Layout>


    <SEO title="Quiz" />
    
    <div>
    
    <ul id="main">
    <p className="P">
    <form name="quiz" onSubmit="return onSubmit">
     <ul><h2>How good are you at taking care of yourself?  5 = More True; 1 = Less True</h2></ul>
      <ul> 1.I take time of myself every day.  </ul>
      <QuizB id="B1"> </QuizB>
      <br/>
      <ul>2.I make time for spirituality (in any form), mindfulness, or religious discipline. </ul>
      <QuizB />
      <br/>
      <ul>3.I limit the amount of television I watch each day.  </ul>
      <QuizB/>
      <br/>
      <ul> 4.I limit the amount of Facebook/internet surfing I do each day. </ul>
      <QuizB/>
      <br/>
      <ul>5.I exercise at least 5 days a week for 30 minutes. </ul>
      <QuizB/>
      <br/>
      <ul> 6.I drink 6-8 glasses of water each day. </ul>
      <QuizB/>
      <br/>
      <ul>7. I take care of my body:</ul>
      <br/>
      <ul>a. I get 7-8 hours of sleep every night.</ul>
      <QuizB/>
      <br/>
      <ul>b. I brush and floss my teeth and practice good hygiene  </ul>
      <QuizB />
      <br/>
      <ul >c. I eat approximately 5 fruits & veggies a day  </ul>
      <QuizB/>
      <br/>
      <ul>d. I limit junk food/fast food consumption. </ul>
      <QuizB/>
      <br/>
      <ul>8.My hair, nails and appearance are good, and I like most things in my wardrobe. </ul>
      <QuizB/>
      <br/>
      <ul>9.I generally wear clean clothes </ul>
      <QuizB/>
      <br/>
      <ul>10.I get together with a friend at least once a month and enjoy hobbies regularly. </ul>
      <QuizB/>
      <br/>
      <ul>11.I have a relaxing routine before bed and a nurturing morning routine.  </ul>
      <QuizB/>
      <br/>
      <ul>12.I usually know what I need and what I am feeling.  </ul>
      <QuizB/>
      <br/>
      <ul> 13.My organized environment supports my goals. </ul>
      <QuizB/>
      <br/>
      <ul> 14.I take frequent breaks and have something to look forward to every evening. </ul>
      <QuizB/>
      <br/>
      <ul> 15.I know what I am passionate about. </ul>
      <QuizB/>
      
      </form>
      <AlertProvider template={AlertTemplate} {...options}
      
      >
        <Alerts></Alerts>
        <button 
        className="submitB" 
        onClick={() => {
         window.location.href="./results"
    }}
        
        
        > Results
        </button>
    
  </AlertProvider>
  </p>
    </ul>
   
    </div>
    
  </Layout>
)

export default quizPage
