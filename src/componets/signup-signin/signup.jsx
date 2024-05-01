import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';




function SignUp () {

    

    const navigate = useNavigate()

    const[ user, setUser ] = useState({
        fullname : "",
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

    const register = () => {
        const { fullname, email, password } = user;
        if (fullname && email && password && validateEmail(email) ) {
            axios.post("/api/v1/users/register", user)
            .then(res => {

                const  userData = res.data.data ;                
                console.log(res);
                const fullName = userData.fullname || "User";
                alert(`Hello ${fullName}, Your SignUp Successfully`);


              
                navigate("/auth")
                
        })
               .catch(err => {
                    if (err.response && err.response.status === 409) {
                        document.getElementById("emailErrorMessage").innerText = "Email already exists";
                        
                    } else {
                        console.error(err);
                    }
                }); // Add error handling here
        } else {
            if (!fullname) {
                document.getElementById("nameErrorMessage").innerText = "Fullname is Required";
            } else {
                document.getElementById("nameErrorMessage").innerText = "";
            }

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
            <div className=" bg-black bg-opacity-60 mx-auto rounded-lg p-1 backdrop-blur-xl" style={{ width:'300px' , backgroundColor : 'rgba(0, 0, 0, 0.279)' }} >
                <h1 className=" text-white ml-2 font-sans text-xl mt-1 font-bold" >Sign Up</h1>
                <div>
                  

                        <input type="text" name="fullname" value={user.fullname}  placeholder="Name" className="ml-6 p-2 mt-5 w-60 h-12 text-white bg-gray-800 rounded-md border-none  placeholder:text-xl placeholder:ml-4 placeholder:p-3 text-x " onChange={handelChange} />
                        <p id="nameErrorMessage"  className=" ml-6 text-red-600" ></p>

                        <input type="email" name="email" value={user.email}  placeholder="Email" className="ml-6 p-2 mt-5 w-60 h-12 bg-gray-800 rounded-md border-none text-white  placeholder:text-xl placeholder:ml-4 placeholder:p-3 text-x " onChange={handelChange} />
                        <p id="emailErrorMessage"  className=" ml-6 text-red-600" ></p>

                        <input type="password" name="password" value={user.password}  placeholder="Password" className="ml-6 p-2 text-white mt-5 w-60 h-12 bg-gray-800 rounded-md border-none text-xl placeholder:text-xl placeholder:ml-4 placeholder:p-3" id="pass" onChange={handelChange} />
                        <p id="passwordErrorMessage"  className=" ml-6 text-red-500" ></p>
                        <input type="checkbox" name="" onClick={setShowPassword} id="show"  className="ml-6 mt-4   bg-gray-800 rounded-md border-none text-xl w-6 h-4" />
                        <label htmlFor="show" className=" text-gray-500" >Show Password </label>

                        <input type="button" onClick={register} value="Sign Up" className="ml-6 mt-6 w-60 h-12 rounded-md border-none text-xl bg-red-700 font-bold text-white hover:bg-white hover:text-red-700 "  />

                    
                </div>
                <div className="content">
                    <h2 className=" text-gray-500 text-sm ml-7 mt-7 mb-2" >Have Already Account? <Link to="/auth" className=" text-white no-underline" href="#"> Sign In now.</Link></h2>
                </div>
            </div>
            
        </>
    )
}

function setShowPassword() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

export default SignUp


