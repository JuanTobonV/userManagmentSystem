import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
       <nav className="bg-blue-300 w-full flex justify-center gap-7 p-4">
            <Link className="text-xl font-medium  p-2 pb-1 text-gray-700" to="/">Home</Link>
            <Link className="text-xl font-medium  p-2 pb-1 text-gray-700" to="/addUser">Add user</Link>
            <a className="text-xl font-medium p-2 pb-1 text-gray-700" href="">About</a>
       </nav>
    </>
  )
}
