import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
  } from "../features/userSlice";
  
  import "../styling/home.css";
const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn)
    const dispatch = useDispatch();
  const login =(response)=>{
      
  }
  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
         <GoogleLogin
            clientId="AIzaSyBQgo94Y3dw-MS45mMJaA0XqN0rSz_0nH0"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true }
            cookiePolicy={"single_host_origin"}
          />
    </div>
  )
}

export default Homepage