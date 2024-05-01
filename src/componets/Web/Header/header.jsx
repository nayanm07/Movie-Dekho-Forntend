import React from "react";
import { NavLink , useNavigate , Link } from "react-router-dom";
import { useSelector } from "react-redux";


import './header.css'; // Import external CSS file



import { useEffect } from "react";
import LogOutBT from "./logOut";




function toggle () {
    let profile = document.querySelector('.profile');
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


 


const Header = () => {


    useEffect(() => {
        window.addEventListener('scroll', () => {
            const header = document.getElementById(header);
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

    }, []);

    
    const navigate = useNavigate()


        const authStatus = useSelector((state) => state.auth.status)

     


     const userData = useSelector(state => state.auth.userData);

    

        const rNavItems = [
            {
                name : "Login",
                url : "/signin",
                active: !authStatus
            },

            {
                name : "profile",
                url : "/",   
                active: authStatus
            }
        ]


    return (
       <>
             
             <div className="header scrolled " id="head" >
                <div className="brand">
                    <img src="https://res.cloudinary.com/dggcrjjv8/image/upload/v1708571230/Web%20image/logo.png" alt="" height="75" width="200" /> 
                </div>

                <div className="main-nav flex items-center gap-x-10">
                    <NavLink to={"/"} className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-white" : "text-gray-400"}`} >
                         HOME 
                    </NavLink>

                    <NavLink to={"/movie"} className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-white" : "text-gray-400"}`} > 
                        MOVIES
                    </NavLink>

                    <NavLink className="text-lg font-semibold text-gray-400" >
                        WEB-SHOWS
                    </NavLink>

                    
                    { authStatus && (
                   <NavLink to={"/wishlist"} className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-white" : "text-gray-400"}`} >
                        WISH-LIST
                    </NavLink>
                    )}
                    { authStatus && (
                    <NavLink to={"/watchhistory"} className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-white" : "text-gray-400"}`} >
                        WATCH-HISTORY
                    </NavLink>
                    )}

                    <div className="searchbar">
                        <input type="search" className="input-search" placeholder="Search..." />
                        <button className="btn-search" onClick={(e) => {
                            e.preventDefault();
                            const query = e.currentTarget.previousElementSibling.value;
                            navigate(`/search?query=${query}`);
                        }} ><i class=" text-white fa-solid fa-magnifying-glass ml-2 scale-110"></i></button>
                    </div>
                    
                </div>


               
            

                <div className="right-nav">
                { authStatus && (
                    <div className="button-container" onClick={toggle}>
                        <img class=" profile w-10 h-10 rounded-full hover:border-black hover:border-2 " src={ userData.avatar || "https://res.cloudinary.com/dggcrjjv8/image/upload/v1708571228/Web%20image/defaultavatr.webp"} alt="" />
                    </div>
                )}


                { !authStatus && (
                    <div className="button-container" >
                        <button class= " bg-white  rounded-md shadow-red-400 font-bold  p-1 hover:bg-red-700 hover:text-white"    onClick={() => navigate("/auth")} >SignIn</button>
                      
                    </div>

                )}
                    
                </div>
                { authStatus && (
                    <div class="menu">
                    <div>
                    <img className="  w-12 h-12 block m-auto mt-1   rounded-full hover:border-black hover:border-2 " src={userData.avatar || "https://res.cloudinary.com/dggcrjjv8/image/upload/v1708571228/Web%20image/defaultavatr.webp"} alt="" />
                    <h3 className=" text-center text-white">{userData.fullname || "User" } </h3>
                    <p className=" text-center text-xs ml-2 mr-2 text-white">{ userData.email ||"email"}</p>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-user"></i><Link>Profile</Link></li>
                        <li><i class="fa-solid fa-gear"></i><Link>Settings</Link></li>
                        <li> <i class="fa-solid fa-circle-info"></i><Link>Help</Link></li>
                        { userData.isAdmin && ( <li><i class="fa-solid fa-user-tie"></i><Link to="/dashbord" >Admin Dashbord</Link></li>) }
                        <li><i class="fa-solid fa-right-from-bracket"></i><LogOutBT/></li>
                    </ul>
                </div>
                )}
                   
                </div> 
                
            

           


       </>
    );
}

export default Header


