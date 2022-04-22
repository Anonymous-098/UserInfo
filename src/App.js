import React, { useState } from "react";
import DisplayUsers from "./components/UI/DisplayUsers";
import AddUser from "./components/Users/AddUser";

const App = () => {
  const [users,setUsers] = useState("");

  const getNewUser = (newUser) =>{
    setUsers([newUser,...users]);
  }

  return (
    <div>
      <AddUser onGetUser={getNewUser}/>
      <DisplayUsers users={users}/>
    </div>
  );
}

export default App;
