import React from 'react'
import { useRef } from 'react'

function UncontrolledLogin() {

    const userNameInput = useRef();
    const passwardInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = userNameInput.current.value;
        const userPassword = passwardInput.current.value;
        console.log("Form submitted : ", {userName, userPassword});
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" ref={userNameInput} placeholder='Enter username' /><br/>
            <input type="password" ref={passwardInput} placeholder='Enter password' /><br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledLogin;