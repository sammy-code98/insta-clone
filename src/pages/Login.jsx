import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //   validation

  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};
  useEffect(() => {
    document.title = "Login - Insta-clone";
  }, []);
  return <div className="container flex mx-auto max-w-screen-md items-center h-screen">logoogo</div>;
}

export default Login;
