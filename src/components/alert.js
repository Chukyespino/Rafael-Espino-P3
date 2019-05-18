import React from 'react'
import { useAlert } from 'react-alert'
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
 
const Alerts = () => {
  const alert = useAlert()

  // function sleep (time) {
  //   return new Promise((resolve) => setTimeout(resolve, time))}
 
  return (
    <div>
    <button className="submitB" 
      onClick={() => {
      
        alert.show('function unabailable... Please sum your score manually');
        
        
       
      }}
      
    >
      Score
    </button>
    </div>
  )
}
 
export default Alerts