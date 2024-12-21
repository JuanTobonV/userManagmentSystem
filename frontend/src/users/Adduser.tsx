import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Adduser() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const {name, username,email} = user

    const onInputChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [evt.target.name]: evt.target.value
        })
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/user", user)
        navigate('/')
    }

  return (
    <>
        <div className='w-full h-full flex justify-center mt-20'>
            <form onSubmit={(e) => onSubmit(e)} className='shadow-md border border-gray-300 p-10 rounded-lg w-1/2 h-fit flex flex-col ' action="">
                <label className='text-lg mb-1 font-medium' htmlFor="name">Name:</label>
                <input className='border border-gray-300 rounded-sm h-8 mb-3 pl-2' 
                    type="text" 
                    placeholder='Enter your name'
                    name='name'
                    value={name}
                    onChange={(e) => onInputChange(e)}
                 />

                <label className='text-lg mb-1 font-medium' htmlFor="username">Username:</label>
                <input className='border border-gray-300 rounded-sm h-8 mb-3 pl-2' 
                    type="text" 
                    placeholder='Enter your username'
                    name='username'
                    value={username}
                    onChange={(e) => onInputChange(e)}


                />
                

                <label className='text-lg mb-1 font-medium' htmlFor="email">Email:</label>
                <input className='border border-gray-300 rounded-sm h-8 pl-2' 
                    type="text" 
                    placeholder='Enter your email'
                    name='email'
                    value={email}
                    onChange={(e) => onInputChange(e)}

                    
                />

                <div className='flex gap-3 justify-center mt-3'>
                    <button type='submit' className='p-2 border border-blue-500 rounded-lg px-4 hover:bg-blue-500 hover:text-white transition-all'>Save</button>
                    <Link to='/' className='p-2 border border-red-500 rounded-lg px-4 hover:bg-red-500 hover:text-white transition-all'>Cancel</Link>
                </div>
            </form>
        </div>
    </>
  )
}
