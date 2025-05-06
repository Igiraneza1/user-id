import React from "react";
import{ useContext } from "react";
import { NameContext } from "./NameProvider";

function NameForm() {
    const { name, setName } = useContext(NameContext);
  return (
    <div>
        <h1>Hello{name}</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"/>
    </div>
  )
}

export default NameForm;