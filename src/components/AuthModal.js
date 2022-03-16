// This page would be: signup form / login form
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthModal = ({ setShowModal, isSignUp, setIsSignUp , login , setBlurbg }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    let navigate = useNavigate()

    console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
        setIsSignUp(false)
        setBlurbg("container-login100")
    }

    const handleSubmit = async (e) => {
        e.preventDefault() //prevent from refreshing
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }
            const response = await axios.post('http://localhost:8000/signup', { email, password })
            const success = (response.status == 201)

            if (success && isSignUp) navigate('/onboarding')
            if (success && !isSignUp) navigate('/dashboard')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {isSignUp &&
                <div className="auth-modal">
                    <div class="auth-modal-text">
                        <div className="close-icon" onClick={handleClick}>
                            X
                        </div>

                        <h2>CREATE ACCOUNT</h2>
                        <p>By clickling SIGN IN, You agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy, by clicking <a href="">here</a></p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email"
                                required={true}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                                required={true}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {isSignUp && <input
                                type="password-check"
                                id="password-check"
                                name="password-check"
                                placeholder="confirm password"
                                required={true}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />}

                            <input className="secondary-button" type="submit" value="Sign-Up" />
                            <p>{error}</p> {/* print the error */}
                        </form>
                    </div>
                </div>
            }
        </div>


    )
}

export default AuthModal