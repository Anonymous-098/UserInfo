import React from "react";
import UserForm from "./UserForm";

const AddUser = (props) => {

  const getUserDetails = (userInfo) =>{
    props.onGetUser(userInfo); 
  }
  
  return <UserForm onSubUser={getUserDetails}/>;
};

export default AddUser;
