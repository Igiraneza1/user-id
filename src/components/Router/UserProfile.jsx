
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const {id} = useParams();
const[user, setUser] = useState(null);
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);

useEffect(() => {
    async function fetchUser() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) throw new Error('User not found');
            const data = await response.json();
            setUser(data);
            }
            catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
    fetchUser();
}, [id]);
if (loading) return <p>Loading...</p>;
if (error) return <p>Erro: {error}</p>;
  return (
    <div className='p-7 bg-slate-200 rounded-xl border-x-4 border-blue-500'>
        <h1 className='text-2xl font-bold p-5'>User Profile : {user.id}</h1>
        <p className='p-2 bg-slate-200 shadow-xl m-2 rounded-md'><em className='text-lg font-bold'>Name: </em>{user.name}</p>
        <p className='p-2 bg-slate-200 shadow-xl m-2 rounded-md'><em className='text-lg font-bold'>Username: </em>{user.username}</p>
        <p className='p-2 bg-slate-200 shadow-xl m-2 rounded-md'><em className='text-lg font-bold'>Email: </em>{user.email}</p>
        <p className='p-2 bg-slate-200 shadow-xl m-2 rounded-md'><em className='text-lg font-bold'>Company: </em>{user.company.name}</p>
    </div>
  )
}
export default UserProfile;