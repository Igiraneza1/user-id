import React from 'react'
import { useRef } from 'react'

function UncontrolledApp() {
    const userNameInput = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredUserName = userNameInput.current.value;

        alert(enteredUserName);
    }
  return (
    <div>
        <form action="" onSubmit= {handleSubmit}>
            <input type="text" ref={userNameInput} placeholder='Enter name' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledApp