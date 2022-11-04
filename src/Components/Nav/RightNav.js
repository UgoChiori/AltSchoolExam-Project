import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    .nav-link {
      padding: 18px 10px;
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      
        flex-flow:column nowrap;
        background-color: grey;
        position: fixed;
        transform: ${({ open }) =>
          open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        width:350px;

        .nav-link {
            // color: #fff;
            
            

        }
    }
  
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      
       <NavLink to='/' className='nav-link'> Home </NavLink>
       
        <NavLink className='nav-link' to='portfolio'>My Github</NavLink>
        <NavLink className='nav-link' to='repositories'> Repositories</NavLink>
        <NavLink className='nav-link' to='contact'>Contact</NavLink> 
    </Ul>
  );
};

export default RightNav;
