import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  return <div>logoogo</div>;
}

export default Login;
