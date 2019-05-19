import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import QuizB from "../components/quizButtons"
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from '../components/alert'
import styled from 'styled-components'


const Question = styled.div`
  color: ${props => props.theme.themecolor};
  background-color: whitesmoke;
  border: 1px solid;
  position: 'fixed';
  font-size: 30px;
  width: 75%;
  display: block;
  border-radius: 25px;
  box-shadow: 5px 10px 18px #888888;
  padding: 30px;
  
  margin-bottom:10px;
  `;
 

 const Title = styled.div`
 background-color: whitesmoke;
 border: 1px solid;
 width:75%;

 font-size: 30px;
 display: block; 
 border-radius: 25px;
 box-shadow: 5px 10px 18px #888888;
 padding: 30px;
 margin-bottom:50px;

 `
const options = {
  
  position: positions.BOTTOM_CENTER,
 
  offset: '30px',
  
  transition: transitions.SCALE
}

const quizPage = () => (
  
  <Layout>


    <SEO title="Quiz" />
    
    
   
    <div id="main"> 
    <form name="quiz" onSubmit="return onSubmit">
    
     <Title><h2>How good are you at taking care of yourself?  5 = More True; 1 = Less True</h2></Title>
     
      <Question> 1.I take time of myself every day. <br/> <br/>
      <QuizB/> </Question>
      
      <Question>2.I make time for spirituality (in any form), mindfulness, or religious discipline. <br/> <br/>
      <QuizB /></Question>
      
      <Question>3.I limit the amount of television I watch each day. <br/> <br/> 
      <QuizB/></Question>
      
      <Question> 4.I limit the amount of Facebook/internet surfing I do each day.<br/> <br/> 
      <QuizB/>
     </Question>
      <Question>5.I exercise at least 5 days a week for 30 minutes.<br/> <br/>
      <QuizB/> </Question>
    
      <Question> 6.I drink 6-8 glasses of water each day. <br/> <br/>
      <QuizB/></Question>
      
      <Question >7. I take care of my body:
      <br/><br/>
      <ul>a. I get 7-8 hours of sleep every night.
      <QuizB/></ul>
      <br/>
      <ul>b. I brush and floss my teeth and practice good hygiene  
      <QuizB /></ul>
      <br/>
      <ul>c. I eat approximately 5 fruits and veggies a day  
      <QuizB/></ul>
      <br/>
      <ul>d. I limit junk food/fast food consumption. 
      <QuizB/></ul></Question>
      <br/>
      <Question>8.My hair, nails and appearance are good, and I like most things in my wardrobe. 
      <QuizB/></Question>
      
      <Question>9.I generally wear clean clothes 
      <QuizB/></Question>
      
      <Question>10.I get together with a friend at least once a month and enjoy hobbies regularly. 
      <QuizB/>
     </Question>
      <Question>11.I have a relaxing routine before bed and a nurturing morning routine.  
      <QuizB/></Question>
     
      <Question>12.I usually know what I need and what I am feeling.  
      <QuizB/></Question>
     
      <Question> 13.My organized environment supports my goals. 
      <QuizB/></Question>
      
      <Question> 14.I take frequent breaks and have something to look forward to every evening. 
      <QuizB/></Question>
      
      <Question> 15.I know what I am passionate about. 
      <QuizB/></Question>
      
      
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
  
  </form>
    </div>
    
  </Layout>
)

export default quizPage
