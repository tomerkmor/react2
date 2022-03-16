import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'

const NavBar = ({ logo , setShowModal , showModal , setIsSignUp}) => {

    const handleClick = () =>{
        setShowModal(true)
        setIsSignUp(false); {/* cuz' we are logging in - no need to register*/}
    }

    const authToken = false
    return(
        <nav className='navbar'>
            <div className="logo-container">
                <img className="logo" src={logo ? logo1 : logo2}/>
            </div>

            {!authToken && logo && <button 
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log-in</button>}
        </nav>
    )
}

export default NavBar