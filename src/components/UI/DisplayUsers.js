import React from "react";
import "./DisplayUsers.css";

const DisplayUsers = (props) =>{

    if(props.users.length===0)
    {
        return;
    }

    return(
        <div className="userController">
            {props.users.map((user)=>{
                return(
                    <div className="userStyles" key={Math.random()}>{user.name} ({user.age} years old)</div>
                )
            })}
        </div>
    )
}

export default DisplayUsers;