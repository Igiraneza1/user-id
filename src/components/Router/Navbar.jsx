
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);
    if (userId) {
      navigate(`/users/${userId}`);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center ">

      <h2 className='text-2xl font-bold'>Route</h2>
        <nav className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div className="p-1 bg-blue-500 text-blue-950 rounded-md">
            <select id="user" value={selectedUser} onChange={handleChange}>
            <option value="">-- Choose a user --</option>
            {Array.from({ length:3 }, (_, i) => (
            <option key={i} value={i + 1}>User {i + 1}</option>
            ))}
           </select>
    </div>
        </nav>
    </div>
  )
}

export default Navbar