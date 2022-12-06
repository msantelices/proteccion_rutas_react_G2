import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './views/Home'
import Profile from './views/Profile'
import Login from './views/Login'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoute>
                        <Home></Home>
                    </ProtectedRoute>
                }></Route>
                <Route path='/profile' element={
                    <ProtectedRoute>
                        <Profile></Profile>
                    </ProtectedRoute>
                }></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
