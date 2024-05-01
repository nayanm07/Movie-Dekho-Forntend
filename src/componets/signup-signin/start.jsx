import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import SignIn from './signIn'
import SignUp from './signup'
import { Outlet } from 'react-router-dom'

function Start() {
    return (
        <div style={{
            content: "",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            backgroundImage: "url('https://res.cloudinary.com/dggcrjjv8/image/upload/v1708574195/Web%20image/wcci5n7i6nvqjqvm49o9.png')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.831)",
            mixBlendMode: "multiply",
            width: "100%",
            height: "100%",
            

            
        }}>
        <img src="https://res.cloudinary.com/dggcrjjv8/image/upload/v1708571230/Web%20image/logo.png" alt="" height="75" width="200" classNameName='mx-auto block mt-10' ></img>
        <Outlet/> 
        </div>
            
    )
}

export default Start

