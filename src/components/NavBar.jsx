import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <span className="logo">Wibu Chat</span>
      <dir className="user">
        <img src={currentUser.photoURL} alt="avatar" loading="lazy" />
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          logout
        </button>
      </dir>
    </div>
  );
};

export default NavBar;
