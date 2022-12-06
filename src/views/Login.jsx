import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = ()=> {
    const navigate = useNavigate()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const loginData = {
        user: 'admin',
        password: 'admin123'
    }

    const login = (e)=> {
        e.preventDefault()

        // 1- Pedir el archivo JSON
        // 2- Buscar el usuario
        // 3- Revisar si la contraseña coincide para ese usuario
        // 4.1- Si esta OK -> Se hace el login
        // 4.2- Si no, manejamos el error

        if(user === loginData.user && password === loginData.password) {
            localStorage.setItem('token', 'test_token_123456789')
            navigate('/')
        } else {
            setError(true)
        }
    }

    return (
        <form onSubmit={(e)=> login(e)}>
            <h1>Login</h1>
            <input type="text" placeholder="Usuario" onChange={(e)=> setUser(e.target.value)}/>
            <input type="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)}/>

            <button>Ingresar</button>

            { error && <small>* Usuario o contraseña incorrecto(s)</small> }
        </form>
    )
}

export default Login