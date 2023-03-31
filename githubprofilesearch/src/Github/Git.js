import axios from "axios";
import React, { useState } from "react";
import Data from "./Data";
import Sidebar from "./Sidebar";

function Git() {

  const [Users, setUsers] = React.useState([]);
  const [Name, setName] = useState({
    Name: "",
  });
  const Input = (event) => {
    setName({
      Name: event.target.value,
    });
  };
  const Submit = (event) => {
    Search(Name.Name);
  };

  const Search = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => response.data)
      .then((res) => {
        setUsers(res);
      });
  };

  return (
    <div className="container">
      <nav className="bg-dark text-white">
        <h1 className="p-4">Github Profile search</h1>
      </nav>
      <div className="row mt-5">
        <div className="col-md-3">
          <Sidebar handleOnChange={Input} handleOnSubmit={Submit} Search={Search}/>
          {/* <pre>{JSON.stringify(Name.Name)}</pre> */}
        </div>
        <div className="col-md-9">
          <Data Info={Users}/>
        </div>
      </div>
    </div>
  );
}
export default Git;
