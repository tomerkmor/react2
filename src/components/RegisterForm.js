const RegisterForm = ({isSignUp , blurbg , showModal, setShowModal , setIsSignUp , setBlurbg}) => {
    
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
        setBlurbg("container-login100-2")

    }
    
    return (
        <div>
            <div className="container-login100-form-btn2">
                <div className="wrap-login100-form-btn2">
                    <div className="login100-form-bgbtn2"></div>
                    <button className="login100-form-btn2" onClick={handleClick}>
                        CREATE ACCOUNT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm