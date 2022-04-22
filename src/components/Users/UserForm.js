import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
        name:name,
        age:age
    }

    props.onSubUser(user);
    setName('');
    setAge('');
  };

  return (
    <div>
      <form className="formStyle" onSubmit={submitHandler}>
        <div className="formController">
          <label>Username</label>
          <input type="text" value={name} onChange={nameHandler}></input>
        </div>
        <div className="formController">
          <label>Age (Years)</label>
          <input type="number" value={age} onChange={ageHandler}></input>
        </div>
        <div className="formController">
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
