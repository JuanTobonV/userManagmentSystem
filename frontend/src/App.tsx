import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Adduser from './users/Adduser'

export default function App() {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addUser' element={<Adduser/>}/>
        </Routes>

      </Router>
    </>
  )
}
