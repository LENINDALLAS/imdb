import React from 'react'
import "./Header.css";
import logo from '../../Components/Header/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import firebase from "firebase/app";
import { googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth';
import { useState } from 'react';

const Header = () => {

  // const [isSignin, setIsSignin] = useState(false)
  const [displayName, setDisplayName] = useState('Sign In')

  const handleSignin = async (provider) => {
    const res = await socialMediaAuth(provider)
    console.log(res);
    setDisplayName(res.displayName)

  }
  // function signIn() {
  //     // Sign into Firebase using popup auth & Google as the identity provider.
  //     var provider = new firebase.auth.GoogleAuthProvider();
  //     firebase.auth().signInWithPopup(provider);
  //   }
  //   function signOut() {
  //     // Sign out of Firebase.
  //     firebase.auth().signOut();
  //   }

  return <div className="header">
    <img src={logo} onClick={() => window.scroll(0, 0)} alt="logo" className="logo" />
    <strong><MenuIcon /> Menu</strong>
    <strong>IMDBpro</strong>
    <strong>Watchlist</strong>

    <div className="header__Contents2">
      {/* {handleSignin : <button type='button' onClick={()=> handleSignin(googleProvider)}>Sign In</button> ? <button>sign out</button>} */}
      <h3 type='button' onClick={() => handleSignin(googleProvider)}><h6> User </h6><h1>{displayName}</h1></h3>
    </div>
  </div>
};

export default Header
