import React, { createContext } from 'react'
import { useState, useEffect } from 'react';

export const NameContext = createContext();


export default function NameProvider({childern}) {


    const [name, setName] = useState("");

    useEffect(() => {
        const savedName = localStorage.getItem("name")
        if(savedName) {
            setName(savedName);
        }
    }
    , [])
    useEffect(() => {
        localStorage.setItem("name", name);
    },[name]);

  return (
    <div>
        <NameContext.Provider value={{name, setName}}>
            {childern}
        </NameContext.Provider>
    </div>
  )
}
