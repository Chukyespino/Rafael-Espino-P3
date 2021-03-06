import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import picOne from '../images/diagram.png'
import picTwo from '../images/piramit.png'




const IndexPage = () => (
<Layout>
    <SEO title="Home" />

    <div id="main" class="wrapper" >
    <div class="aside aside-1">
   

   
        {/* <div className="sideA"> */}
   <h1> Why self-care? </h1>
    Self-care is highly important to be both mentally and physically healthy.<br />
    
    The everyday life can be sometimes overwhelming with balancing so many different aspects of life such as work, school, family and friends.
    The benefits of practicing self-care are endless, and some are boosting the immune system by activating the Parasympathetic Nervous System,
     lowering anxiety and depression, and increase positive thinking.

<h2>Fast Fact:</h2>
    According to Pew Research Center, in 2015 there was an estimated of $10 billion spent on self-care products (exercise equipment, gym membership, yoga/meditation classes).  
    
    {/* </div>  */}

     <div className="aside aside-4" >
            <div class="sideB" >
         <img src={picOne} width="100%"  /></div>

      </div>

         </div>

         

         <div class="aside aside-2"> 

        

         {/* <div class="sideC"> */}

    {/* <img src={picTwo} width="70%" /> */}
    {/* </div> */}

         {/* <div class="sideD" > */}
         <h1>Self-care Quiz:</h1>
        The self-care quiz is intended to help the user determine if his/her habits are healthy in their life. <br/>
         If the scores are too low, then the user can self-analyze the different areas in their life. <br/>
          Both the strengths and weaknesses are helpful for the user <br/>to recognize and therefore improve their well-being. <br/>
           There are suggestions in the result page that will provide further guidance for the user.
         {/* </div> */}

         <div className="aside aside-3" >
            <div class="sideC" >
         <img src={picTwo} width="80%"  /></div>

      </div>

         
         </div>
    

    
    
      <br/><br/>
      <div class="aside aside-5" >
      <h1> Self-Care Checklist</h1> 
       <b> The self-care checklist</b> is intended to provide organization and reduce stress levels.
        By organizing the tasks that are a priority, the user can more easily stay on track. 
        Once a task in the high priority has been completed, the userthen proceeds in  choosing a reward from the list.
        <br/>The rewards can be anything from eating a dessert, hanging out with friends, watch Netflix and etc. 
        The reward list is given to the user to provide motivation in completing the remaining tasks. 
          Positive reinforcement has been proven by the psychologist, B. F. Skinner to be an effective approach to encourage positive behavior.
         </div> <br/>
 
    </div>
    
  </Layout>
)

export default IndexPage
