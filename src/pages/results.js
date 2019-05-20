import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'


const Results = styled.div`
  background-color: whitesmoke;
  border: 1px solid;
  width:75%;
  font-size: 25px;
  display: block;
  border-radius: 25px;
  box-shadow: 5px 10px 18px #888888;
  padding-right:20px;
  padding-left: 20px;
  padding-bottom: 30px;
  margin-bottom:50px;
  `;

  const Title = styled.div`
   background-color: whitesmoke;
  border: 1px solid;
  width:75%;
  font-size: 55px;
  display: block;
  border-radius: 25px;
  box-shadow: 5px 10px 18px #888888;
  padding-right:20px;
  padding-left: 20px;
  padding-bottom: 30px;
  margin-bottom:50px;
  
  `
 

const resultsPage = () => (
<Layout>
    <SEO title="Results" />
    <div>
    <ul id="main">
    
   <Title> <h3> Now look for your total score...</h3></Title>
  
  <Results>
    <h1>72-90:</h1><br/>
    Way to go! You are taking excellent care of yourself. Now you can delve further into things like<br/>
    getting massages, simplifying your life, and getting rid of as many stressors as you can.<br/></Results>
    <Results> 
    <h1>54-71: </h1>
    <br/>You know how to take care of yourself. Now, do it consistently. Would it help to track your daily<br/>
    self-care? What can you do that would allow for some of these self-care habits to happen regularly?</Results>
    <Results> 
    <h1>36-53:</h1>
    <br/> You may value yourself, but can you prioritize self-care a bit more? Set an evening just for you<br/>
    every week with no outside obligations. Examine your calendar to get rid of unimportant meetings, etc.<br/>
    Turn off the TV/Facebook/the internet after an hour of watching/surfing, etc. Put in a daily half hour for<br/>
    you in your appointment book. Let go of unrealistic standards of how much you can get done in a day.<br/>
    Cut your to do list for the day in half. Now use that time to work on one thing on the checklist above<br/>
    until you form a habit. Then move onto another one.</Results>
    <Results> 
    <h1>18-35:</h1> <br/>
    You feel guilty every time you take time for yourself. You need to realize that your family,<br/>
    friends, school and work don&#39;t want an empty vessel. They want a vibrant, authentic, energetic you. Talk<br/>
    with your family and friends about how you want to start taking better care of yourself. Is there a way<br/>
    you can use your friends and family to build in time for your self-care? If they are supportive, see if they<br/>
    are open to having you be accountable to them. Which thing from the above checklist do you think<br/>
    would have the most impact on your energy and well-being? Work on that action until it becomes a<br/>
    habit.
     </Results>
    <Results> 
    <h1>0-17:</h1><br/> Your actions don’t seem to reflect that you prioritize taking care of yourself. What are you<br/>
    prioritizing instead? You need to realize that your family, friends, school and work don&#39;t want an empty<br/>
    vessel. They want a vibrant, authentic, energetic you. Talk with your family and friends about how you<br/>
    want to start taking better care of yourself. Remember, you are just as important as the other people in<br/>
    your life. Shine for them! Pick an easy, non-threatening action to start caring for yourself. Maybe you<br/>
    can drink one more glass of water or take 5 minutes alone. Start small and work your way up.</Results>
    </ul>
    </div>
  </Layout>
)

export default resultsPage
