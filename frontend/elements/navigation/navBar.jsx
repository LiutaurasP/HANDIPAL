import React from 'react'
import LoginButton from '../logInSignUp/LoginButton'
import SignupButton from '../logInSignUp/SignupButton'
import "./navBar.css";

function navBar() {
  return (
    <nav className='headerNavBar'>

        <div className='logo'>
            <h2>HANDIPAL</h2>
        </div>

        <div className='SearchBar'>
            <input type='text' placeholder='Search...' />
        </div>

        <div className='userActions'>
            <LoginButton />
            <SignupButton />
        </div>
    </nav>
  )
}

export default navBar