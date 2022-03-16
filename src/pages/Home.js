import NavBar from "../components/NavBar"
import AuthModal from "../components/AuthModal"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import { useState } from 'react'


const Home = () => {

    const [showModal, setShowModal] = useState(false); {/* home page: show the login / registery form */ }
    const [authToken, setAuthToken] = useState(false); {/* is used to display the navbar and the create account*/ }
    const [isSignUp, setIsSignUp] = useState(false); {/* we assume that the user is not registered */ }

    const [blurbg, setBlurbg] = useState("container-login100");

    
    // setLogin(false)
    return (
        <div>
            <div className="limiter">
                <div className={blurbg}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <LoginForm setShowModal={setShowModal} isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
                        <RegisterForm isSignUp={isSignUp} blurbg={blurbg} showModal={showModal} setShowModal={setShowModal} setIsSignUp={setIsSignUp} setBlurbg={setBlurbg}/>
                    </div>
                </div>

                <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} setIsSignUp={setIsSignUp} setBlurbg={setBlurbg}/>
            </div>
        </div>

    )
}

export default Home