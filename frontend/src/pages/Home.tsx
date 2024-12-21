import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface userType {
    name:string
    username:string
    email:string
}

export default function Home() {
    const [users, setUsers] = useState<userType[]>();

    const loadUser = async () => {
        const result = await axios.get('http://localhost:8080/users')
        setUsers(result.data)
    }

    useEffect(() => {
        loadUser();
    }, [])

  return (
    <>
       <div className='h-screen w-full flex justify-center '>
            <table className=' h-fit w-full text-center border m-10  '>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className=' text-lg'>Name</th>
                        <th className=' text-lg'>Username</th>
                        <th className=' text-lg'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => (
                            <tr >
                                <th scope='row' key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
       </div>
    </>
  )
}
