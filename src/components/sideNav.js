import React from 'react'
import styled from 'styled-components'

const Button1 = styled.button`
background-color: transparent;
border-style: none;
margin-top: -40px;
position: fixed;
color: rgba(0, 247, 255, 0.712);
font-size: 80px;
`
const SideNav = () => (
    <div>
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&#9756;</a>
    <a href="/">HOME</a>
    <a href="/toDoList">Check List</a>
    <a href="/quiz">Quiz</a>
    <a href="/results">Results</a>
    </div>

    <Button1 id="openButton" onClick={openNav}>&#9758;</Button1>
    </div>

)

function openNav() {
  document.getElementById("mySidenav").style.width = "230px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("openButton").style.background="transparent";
  document.getElementById("openButton").style.color="transparent";
  document.getElementById("openButton").style.border="transparent";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "100px";
  document.getElementById("openButton").style.border="transparent";
  document.getElementById("openButton").style.color="rgba(0, 247, 255, 0.712)";
  
}
export default SideNav;