import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'; // Import external CSS file


import { useEffect } from "react";


   

function toggle () {
    let profile = document.querySelector('.profile');
    let menu = document.querySelector('.menu');
    menu.classNameList.toggle('active');
}


 


const Header = () => {
    return (
       <>
             
             <div classNameName="header" >
                <div classNameName="brand">
                    <img src="https://res.cloudinary.com/dggcrjjv8/image/upload/v1708571230/Web%20image/logo.png" alt="" height="75" width="200" /> 
                </div>

                <div classNameName="main-nav" >
                    <NavLink  classNameName="button-container" >
                        <h2>HOME</h2>
                        
                    </NavLink>

                    <NavLink classNameName="button-container"  > 
                        <h2>MOVIES</h2>
                    </NavLink>

                    <NavLink classNameName="button-container" >
                        <h2>WEB-SHOWS</h2>
                    </NavLink>

                    <NavLink classNameName="button-container" >
                        <h2>WISH-LIST</h2>
                    </NavLink>

                    <NavLink classNameName="button-container" >
                        <h2>WATCH-HITORY</h2>
                    </NavLink>
                </div>

                <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
                </span>
            

                <div className="right-nav">
                    <div classNameName="button-container" onClick={toggle}>
                        <img classNameName=" profile w-10 h-10 rounded-full hover:border-black hover:border-2 " src="https://res.cloudinary.com/dggcrjjv8/image/upload/v1708571228/Web%20image/defaultavatr.webp" alt="" />
                    </div>
                </div>

                <div classNameName="menu">
                    <div>
                    <img classNameName="  w-12 h-12 block m-auto mt-1   rounded-full hover:border-black hover:border-2 " src="https://res.cloudinary.com/dggcrjjv8/image/upload/v1708571228/Web%20image/defaultavatr.webp" alt="" />
                    <h3 classNameName=" text-center text-white">Nayan</h3>
                    <p classNameName=" text-center text-white">example@gmail</p>
                    </div>
                    <ul>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Sign Out</a></li>
                    </ul>
	            </div>

            </div> 

           


       </>
    );
}

export default Header


