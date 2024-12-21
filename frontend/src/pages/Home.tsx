import axios from 'axios';
import { useEffect, useState } from 'react'

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
            <table className=' h-fit w-full text-center border m-28 shadow  '>
                <thead className='border-b border-gray-300'>
                    <tr className='p-6'>
                        <th>#</th>
                        <th className=' text-lg'>Name</th>
                        <th className=' text-lg'>Username</th>
                        <th className=' text-lg'>Email</th>
                        <th className=' text-lg'>Action</th>
                    </tr>
                </thead>
                <tbody className='mt-16'>
                    {
                        users?.map((user, index) => (
                            <tr>
                                <th scope='row' key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td className='flex gap-2 justify-center mt-3'>
                                    <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">View</button>
                                    <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500  focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Edit</button>
                                    <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
       </div>
    </>
  )
}
