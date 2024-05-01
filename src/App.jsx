import  React, { useState ,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import { Footer, Header, Home , Dashbord  } from './componets'
import { Outlet } from 'react-router-dom'
import store from './store/store'
import { login as authLogin } from './store/authSlice'
import axios from 'axios'




function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    // Check for access token in local storage
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData && authData.accessToken) {
        // Make a request to validate the access token
        axios.post('/api/v1/users/getUser', { accessToken: authData.accessToken })
            .then(res => {
              const  userData = res.data.data ;
              if(userData) dispatch(authLogin(userData));
             
            })
            .catch(error => {
                // Handle token validation error (e.g., token expired)
                console.error('Token validation error:', error);
            });
    }
}, []);
  


  


  return (
    <div>
         <>
            
            <div style={{
            content: "",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
           
            backgroundSize: "cover",
            backgroundColor: "black",
            mixBlendMode: "multiply",
            width: "100%",
            height: "100%",
            

            
        }}>
            <div  className=" content m-0 p-0 w-full h-full flex flex-col overflow-y-auto"  >
                <Header/>
                <main>
                  <Outlet/>
                </main>
                <Footer/>
            </div>
            </div>
            
        </>
    </div>
  )
}

export default App

