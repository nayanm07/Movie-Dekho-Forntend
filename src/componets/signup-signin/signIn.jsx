import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login as authLogin } from "../../store/authSlice";

function SignIn () {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const[ user, setUser ] = useState({
        email : "",
        password : "", 
    })


    const handelChange = e => {
        const { name, value } = e.target;  
        setUser({
            ...user,
            [name]: value
        });
    }

    const validateEmail = email => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const Login = () => {
        const { email, password } = user;
        if (email && password && validateEmail(email) ) {
            axios.post("/api/v1/users/login", user)
                .then(res => {

                        const  userData = res.data.data ;
                        
                        if(userData) dispatch(authLogin(userData));
                        
                        console.log(res);
                        const fullName = userData.fullname || "User";
                        alert(`Hello ${fullName}, Your SignIn is Successfully`);

                        navigate("/")
                        
                        
                })
                .catch(err => {
                    if (err.response && err.response.status === 406) {
                        document.getElementById("emailErrorMessage").innerText = "Email Not Found";
                        
                    }
                   
                    
                    if (err.response && err.response.status === 401) {
                        document.getElementById("passwordErrorMessage").innerText = "Password is in Corect";
                    } else {
                        console.error(err);
                    }
                }); // Add error handling here
        } else {
           

            if (!email) {
                document.getElementById("emailErrorMessage").innerText = "Email is Required";
            } else if (!validateEmail(email)) {
                document.getElementById("emailErrorMessage").innerText = "Invalid Email Format";
            } else {
                document.getElementById("emailErrorMessage").innerText = "";
            }


            if (!password) {
                document.getElementById("passwordErrorMessage").innerText = "Password is Required";
            } else {
                document.getElementById("passwordErrorMessage").innerText = "";
            }
        }
    }

    return (
        <>
            <br />
            <br />
            <div className=" bg-black bg-opacity-60 mx-auto rounded-lg p-1 backdrop-blur-xl" style={{ width:'300px', backgroundColor : 'rgba(0, 0, 0, 0.279)'   }} >
                <h1 className=" text-white ml-2 font-sans text-xl mt-1 font-bold" >Sign In</h1>
                <div>
                    
                        <input type="email" name="email" value={user.email} placeholder="Email" className="ml-6 text-white mt-5 w-60 h-12 bg-gray-800 rounded-md border-none  placeholder:text-xl placeholder:ml-4 placeholder:p-3 text-x  p-2" onChange={handelChange} />
                        <p id="emailErrorMessage" style={{ color: 'red' }} className=" ml-6" ></p>

                        <input type="password" name="password" value={user.password}  placeholder="Password" className="ml-6 p-2 mt-5 w-60 h-12 bg-gray-800 rounded-md border-none text-xl text-white placeholder:text-xl placeholder:ml-4 placeholder:p-3" id="myInput" onChange={handelChange} />
                        <p id="passwordErrorMessage" style={{ color: 'red' }} className=" ml-6" ></p>
                        <input type="checkbox" name="" onClick={setShowPassword} id="show"  className="ml-6 mt-4   bg-gray-800 rounded-md border-none text-xl w-6 h-4 text-gray-500" />
                        <label htmlFor="show" className=" text-gray-500">Show Password </label>

                        <input type="button" onClick={Login} value="Sign In" className="ml-6 mt-6 w-60 h-12 rounded-md border-none text-xl bg-red-700 font-bold text-white hover:bg-white hover:text-red-700 "  />

                        <input type="checkbox" name="check" id="1" className="ml-6 mt-6   bg-gray-800 rounded-md border-none text-xl w-6 h-4" />
                        <label htmlFor="1" className=" text-gray-500" >Remember me</label>
                        <a className="  mt-5 mr-5 text-gray-500 no-underline float-right" href="#">Need Help?</a>
                
                </div>
                <div className="content">
                    <h2 className=" text-gray-500 text-sm ml-7 mt-7 mb-2" >New to Movie Dekho? <Link to="/auth/signup" className=" text-white no-underline" href="#"> Sign up now.</Link></h2>
                </div>
            </div>
            
        </>
    )
}

function setShowPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

export default SignIn