import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function ViewUser() {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''

    })

    const {id} = useParams();

    const {name, username,email} = user


    useEffect(() => {
        const loadUser = async () =>{
            try {
                const result = await axios.get(`http://localhost:8080/user/${id}`)
                setUser(result.data)
            } catch (error) {
                console.error("There was an error fetching the user data!", error);
            }
        }
        loadUser();
    }, [id])

  return (    
    <>
        <div className='w-full h-full flex justify-center mt-20'>
              <div className="w-1/2 shadow-md flex flex-col items-center bg-gray-100 rounded-md gap-4 py-3">
                    <p>User details</p>

                    <div className="flex gap-3">
                        <b>name:</b>
                        <p>{name}</p>
                    </div>

                    <div className="flex gap-3">
                        <b>Username:</b>
                        <p>{username}</p>
                    </div>

                    <div className="flex gap-3">
                        <b>Email:</b>
                        <p>{email}</p>
                    </div>

                    <Link to={`/`} className="bg-blue-400 p-2 rounded-md text-white"> Back to home</Link>


              </div>
        </div>
    </>
  )
}
