import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';


function DashHome() {
  return (
   <>
    <h1 className=' text-center text-white font-bold '>Admin Dashboard</h1>
    <div class="container">
     
        <Link to="/dashbord/users">
            <div class="component" id="user">
                <i class="fa-solid fa-user text-white"></i>
                <h2 className=' text-white font-bold'>Users</h2>   
            </div>
        </Link>

        <Link to="/dashbord/trending">
            <div class="component" id="user">
                <i class="fa-solid fa-chart-line text-white"></i>
                <h2 className=' text-white font-bold'>Trending</h2>   
            </div>
        </Link>

        <Link to="/dashbord/movies">
            <div class="component" id="user">
                <i class="fa-solid text-white fa-film"></i>
                <h2 className=' text-white font-bold'>Movies</h2>   
            </div>
        </Link>

        <Link to="/web-show">
            <div class="component" id="user">
                <i class="fa-solid fa-video text-white"></i>
                <h2 className=' text-white font-bold'>Web-Show</h2>   
            </div>
        </Link>
        
    </div>
   </>
  )
}

export default DashHome