import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import picOne from '../images/diagram.png'
import picTwo from '../images/piramit.png'


const IndexPage = () => (
<Layout>
    <SEO title="Home" />
    <div id="main" >
    <ul >
    <p className="P">
    <div className="pictures">
         <img src={picOne} width="600" height="500" /> <br/>
       
         </div>
   
   <h1> Why self-care? </h1>
    Self-care is highly important to be both mentally and physically healthy.<br />
    
    The everyday life can be sometimes overwhelming with balancing so many different aspects of life such as work, school, family and friends.<br />
    The benefits of practicing self-care are endless, and some are boosting the immune system by activating the Parasympathetic Nervous System,<br/>
     lowering anxiety and depression, and increase positive thinking.

<br /> 
 
<h2>Fast Fact:</h2>

    According to Pew Research Center, in 2015 there was an estimated of $10 billion spent on self-care products (exercise equipment, gym membership, yoga/meditation classes).  
    </p>   <div className="P2">
    <img src={picTwo} width="700" height="500" />
    <div className="trdP">
         <h1>Self-care Quiz:</h1>
        
        The self-care quiz is intended to help the user determine if his/her habits are healthy in their life. <br/>
         If the scores are too low, then the user can self-analyze the different areas in their life. <br/>
          Both the strengths and weaknesses are helpful for the user <br/>to recognize and therefore improve their well-being. <br/>
           There are suggestions in the result page that will provide further guidance for the user.
         </div>
    </div>
      <br/><br/>
      <div className="secondP">
      <h1> Self-Care Checklist</h1> 
       <b> The self-care checklist</b> is intended to provide organization and reduce stress levels.<br/>
        By organizing the tasks that are a priority, the user can more easily stay on track. <br/>
        Once a task in the high priority has been completed, the user then proceeds in choosing a reward from the list.<br/> 
        <br/>The rewards can be anything from eating a dessert, hanging out with friends, watch Netflix and etc. <br/>
        The reward list is given to the user to provide motivation in completing the remaining tasks. <br/>
          Positive reinforcement has been proven by the psychologist, B. F. Skinner to be an effective <br/>approach to encourage positive behavior.<br/>
         </div> <br/>
       
      
    </ul>
      
        
   
    </div>
    
  </Layout>
)

export default IndexPage
