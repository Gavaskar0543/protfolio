import { useEffect, useState } from "react";
import { FaDoorClosed,FaDoorOpen,FaUpload } from 'react-icons/fa';

import styled from "styled-components";
function Header(){
  const [showMenu,setShowMenu] = useState(false);
  const [open,setOpen] = useState(false);

  function scrollToPosition(x, y) {
    // Use window.scrollTo to scroll to the specified position (x, y)
    window.scrollTo(x, y);
  }


  function openMenuList() {
    setShowMenu(prevShowMenu => !prevShowMenu);
    setOpen(prevOpen => !prevOpen);
  }
   return(
    <MainDiv className="border border-2 shadow-lg mt-0 ">
       
        <ul className={showMenu ? 'showMenu' : ' mt-2'}>
        
           <li onClick={() =>{scrollToPosition(0, 600)}}>Projects</li>
           <li>About Me</li>
           <li>Contact Me</li>
        </ul>
        <div onClick={openMenuList} className='menu'>
         {open ? 
          <div className='menu-line'>
          <FaDoorOpen/>
        </div>
        :
        <div className='menu-line'>
        <FaDoorClosed/>
      </div>
        }
         
        </div> 
    </MainDiv>
   ); 
}
const MainDiv = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

.logo {
  font-size:36px;
  font-weight:bolder;
  transition: color 0.3s ease-in-out;


  &:hover {
    color: rgb(254, 189, 105);
  }
}

ul li {
  display: inline-block;
  margin: 0 25px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  font-size:20px;

  &:hover{
    color:orange;
  }
 
}



.menu-line {
 
  font-size:20px;
  width: 20px;
 
 
}

.menu {
  cursor: pointer;
  display: none;
}

@media all and (max-width: 940px) {
  /* Corrected 'OuterDiv' to 'OuterDiv' (case-sensitive) */
  width: 100%;
  flex-direction: column;

  ul li {
    display: block;
    padding: 10px 0;
    margin: 0; /* Corrected 'marign' to 'margin' */
  }

  ul {
    text-align: center;
    padding:0;
    display:none;
  
   
  }
  li{
    transition: border 0.3s ease-in-out;
    &:hover{
      border-bottom:4px solid orange;
    }
  }
 
  .logo {

    align-self: flex-start;
    margin: 10px 0 0 30px; /* Corrected 'marign' to 'margin' */
  }

  .menu{
    display:block;
    position:absolute;
    right:20px;
    top:25px;
  }
  .showMenu{
    display:block;
  }
}

`;


export default Header;