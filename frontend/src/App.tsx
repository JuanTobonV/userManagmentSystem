import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Adduser from './users/Adduser'
import Edituser from './users/EditUser'
import ViewUser from './users/ViewUser'

export default function App() {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addUser' element={<Adduser/>}/>
          <Route path='/edituser/:id' element={<Edituser/>}/>
          <Route path='/viewuser/:id' element={<ViewUser/>}/>
        </Routes>

      </Router>
    </>
  )
}
