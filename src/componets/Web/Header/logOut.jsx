import React from 'react'
import { combineSlices } from '@reduxjs/toolkit';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/authSlice';
import { useNavigate } from 'react-router-dom';


function LogOutBT() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

const logoutHeadler = () => {
    
    axios.post("/api/v1/users/logout")
    .then(res => {
        alert("logout Successfully");
        dispatch(logout())
        navigate("/")
    })
    .catch (
        err => {
            console.log(err);
        }
    )
}
 
    return (

    <div onClick={logoutHeadler}>Sign Out</div> 


    )
}

export default LogOutBT