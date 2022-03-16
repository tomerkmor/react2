import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const LoginForm = ({ setShowModal , isSignUp , setIsSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleClick = () => {
        setShowModal(true)
        // setIsSignUp(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() //prevent from refreshing
        console.log(e)
        try {
            console.log("1")
            console.log(email)
            const response = await axios.post('http://localhost:8000/login', { email, password })
            const success = (response.status === 201)

            if (success && !isSignUp) navigate('/dashboard')
            console.log(e)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form className="login100-form validate-form" autoComplete="off" onSubmit={handleSubmit}>
                <span className="login100-form-title p-b-49">
                    Login
                </span>

                <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                    <span className="label-input100">Email</span>
                    <input
                        autoComplete="off"
                        id="Email"
                        className="input100"
                        type="Email"
                        name="Email"
                        required={true}
                        placeholder="Type your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Password</span>
                    <input 
                        className="input100" 
                        type="password" 
                        name="pass" 
                        required={true} 
                        placeholder="Type your password" 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                </div>

                <div className="text-right p-t-8 p-b-31">
                    <a href="#">
                        Forgot password?
                    </a>
                </div>

                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>
                </div>

                <div className="flex-col-c p-t-155">
                    <span className="txt1 p-b-17">
                        Or Sign Up Using
                    </span>
                </div>
            </form>

        </div>
    )
}

export default LoginForm