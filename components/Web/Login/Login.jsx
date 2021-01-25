
import styles from './Login.module.css'
import { useState } from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button'
import Message from '../Form/Message'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        setError("")

        if(username){
            if(password){
                //
            }else{
                setError("You haven't entered your password!")
                return false
            }
        }else{
            setError("You haven't entered your username!")
            return false
        }

    }

    return <form onSubmit={handleSubmit} method="post">
        {error &&
            <Message variant="red">{error}</Message>
        }
        <Input placeholder="Username" type="text" onChange={ e => setUsername(e.target.value) } />
        <Input placeholder="Password" type="password" onChange={ e => setPassword(e.target.value) }  />
        <Button variant="gold" type="submit">Login</Button>
    </form>
}
export default Login