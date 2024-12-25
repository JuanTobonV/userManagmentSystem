import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Adduser from './users/Adduser'
import Edituser from './users/EditUser'

export default function App() {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addUser' element={<Adduser/>}/>
          <Route path='/edituser/:id' element={<Edituser/>}/>
        </Routes>

      </Router>
    </>
  )
}
