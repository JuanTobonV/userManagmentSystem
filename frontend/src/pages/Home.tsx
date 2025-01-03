import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

interface userType {
    id:number
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

    const deleteUser = async(id: number) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUser()
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
                                    <Link to={`/viewuser/${user.id}`} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">View</Link>
                                    <Link to = {`/edituser/${user.id}`} type="button" className="text-black hover:text-dark border border-black hover:bg-white  focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black-300 dark:text-black-300 dark:hover:text-white dark:hover:bg-gray-400 dark:focus:ring-yellow-900">Edit</Link>
                                    <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    onClick={ () => deleteUser(user.id)}
                                    
                                    >Delete</button>
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
