import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Footer from './Components/Footer'
import Overview from './pages/Overview'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
