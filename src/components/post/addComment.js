import { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}) {
  const [coment, setComment] = useState("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSUbmitComment = (e) => {
      e.preventDefault();
      return null;
  }
  return null;
}
