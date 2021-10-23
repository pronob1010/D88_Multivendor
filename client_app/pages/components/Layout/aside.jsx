import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, logout, authCheck } from '../../../redux/All_Reducers/authActionCreator'
import { Alert } from 'reactstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    let router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [username, setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mode, setMode] = useState('Login')
    const [error, seterror] = useState('')
    
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.userReducer)
    const { authFailedMsg } = useSelector(state => state.userReducer)
    const { username } = useSelector(state => state.userReducer.user_details)
    let err = null;
    if (authFailedMsg!==null){
        err = <Alert color="danger">{authFailedMsg}</Alert>
    }

    useEffect(() => {
        dispatch(authCheck())
    }, [])

    
    let handleSubmit = (event) => {
        if (mode === "Sign Up") {
            if (password === confirmPassword) {
                seterror('')
                dispatch(auth(email, password, mode))
                event.preventDefault();
            }
            else {
                seterror("Password and confirm password does not match");
            }
        }
        else {
            seterror('')
            // router.push("#")
            dispatch(auth(email, password, mode))
            event.preventDefault();
        }
    }
    
    let user_logout =()=>{
        // router.push("#")
        dispatch(logout())
    }

    let switchModeHandler = () => {
        mode === "Sign Up" ? setMode("Login") : setMode("Sign Up")
    }

    let aside = null
    if (token === null) {
        aside = (
            <div>
                <aside id="sidebarContent" className="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler">
                    <div className="u-sidebar__scroller">
                        <div className="u-sidebar__container">
                            <div className="js-scrollbar u-header-sidebar__footer-offset pb-3">


                                <div className="js-scrollbar u-sidebar__body">
                                    <div className="u-sidebar__content u-header-sidebar__content">
                                        <div className="d-flex align-items-center pt-4 px-7">
                                            <button type="button" className="close ml-auto"
                                                aria-controls="sidebarContent"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-event="click"
                                                data-unfold-hide-on-scroll="false"
                                                data-unfold-target="#sidebarContent"
                                                data-unfold-type="css-animation"
                                                data-unfold-animation-in="fadeInRight"
                                                data-unfold-animation-out="fadeOutRight"
                                                data-unfold-duration="500">
                                                <i className="ec ec-close-remove"></i>
                                            </button>

                                        </div>
                                        <header className="text-center mb-7">
                                            <h2 className="h4 mb-0">Welcome Back!</h2>
                                            <p>Login to manage your account.</p>
                                        </header>
                                        <form onSubmit={handleSubmit} method="POST" id="form-login">
                                            <label className="mt-2 ml-1">Email</label>
                                            <input type="email" className="form-control" name="email"
                                                onChange={(event) => { setEmail(event.target.value) }} id="signinEmail" value={email} placeholder="Email" aria-label="Email" aria-describedby="signinEmailLabel" required
                                                data-msg="Please enter a valid email address."
                                                data-error-className="u-has-error"
                                                data-success-className="u-has-success" />
                                            {/*                                             
                                            {mode === "Sign Up" ?
                                            <div>
                                            <label className="mt-2 ml-1">Username</label>
                                            <input type="text" className="form-control" name="username"
                                                        onChange={(event) => { setUsername(event.target.value) }} id="signUpUsername" value={username} placeholder="Username" aria-label="username" aria-describedby="signinUsernameLabel" required
                                                        data-msg="Please enter username address."
                                                data-error-className="u-has-error"
                                                data-success-className="u-has-success" />
                                            </div> : null} */}

                                            <label className="mt-2 ml-1">Password</label>
                                            <input type="password" onChange={(event) => { setPassword(event.target.value) }} className="form-control" name="password" id="signinPassword" placeholder="Password" aria-label="Password" value={password} aria-describedby="signinPasswordLabel" required
                                                data-msg="Your password is invalid. Please try again."
                                                data-error-className="u-has-error"
                                                data-success-className="u-has-success" />

                                            {mode === "Sign Up" ?
                                                <div>
                                                    <label className="mt-2 ml-1">Confirm Password</label>
                                                    <input type="password" onChange={(event) => { setConfirmPassword(event.target.value) }} value={confirmPassword} className="form-control" name="confirmPassword" id="signupConfirmPassword" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="signupConfirmPasswordLabel" required
                                                        data-msg="Password does not match the confirm password."
                                                        data-error-className="u-has-error"
                                                        data-success-className="u-has-success" />
                                                </div> : null
                                                }


                                            <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover mt-2">{mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                                        </form>
                                        {error !== "" && mode==="Sign Up" ? <div className="text-center mb-4" style={{ color: "red", fontSize: 16 }}>{error}</div> : null}
                                        <div className="text-center mb-4">
                                            <span className="small">{mode === "Sign Up" ? "Already have an account?" : "Wanna be a friend ?"}</span>
                                            <button className="btn btn-block btn-sm btn-primary transition-3d-hover mt-2"
                                                data-target="#login"
                                                data-link-group="idForm"
                                                data-animation-in="slideInUp" onClick={switchModeHandler}>Switch to {mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </aside>
                <a className="js-go-to u-go-to"
                    data-position='{"bottom": 15, "right": 15 }'
                    data-type="fixed"
                    data-offset-top="400"
                    data-compensation="#header"
                    data-show-effect="slideInUp"
                    data-hide-effect="slideOutDown">
                    <span className="fas fa-arrow-up u-go-to__inner"></span>
                </a>

            </div>
        )
    }
    else {
        aside = (
            <div>
                <aside id="sidebarContent" className="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler">
                    <div className="u-sidebar__scroller">
                        <div className="u-sidebar__container">
                            <div className="js-scrollbar u-header-sidebar__footer-offset pb-3">


                                <div className="js-scrollbar u-sidebar__body">
                                    <div className="u-sidebar__content u-header-sidebar__content">
                                        <div className="d-flex align-items-center pt-4 px-7">
                                            <button type="button" className="close ml-auto"
                                                aria-controls="sidebarContent"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-event="click"
                                                data-unfold-hide-on-scroll="false"
                                                data-unfold-target="#sidebarContent"
                                                data-unfold-type="css-animation"
                                                data-unfold-animation-in="fadeInRight"
                                                data-unfold-animation-out="fadeOutRight"
                                                data-unfold-duration="500">
                                                <i className="ec ec-close-remove"></i>
                                            </button>

                                        </div>
                                        <header className="text-center mb-7">
                                            <h2 className="h4 mb-0">Do you want to logout?</h2>
                                            <p>Logout your account.</p>
                                        </header>
                                        {/* <Link href="/profile"> */}
                                        <a href="/profile" className="btn btn-block btn-primary transition-3d-hover" >{username} Profile </a>
                                        {/* </Link> */}
                                        
                                        <button onClick={user_logout} type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Logout</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </aside>
                <a className="js-go-to u-go-to"
                    data-position='{"bottom": 15, "right": 15 }'
                    data-type="fixed"
                    data-offset-top="400"
                    data-compensation="#header"
                    data-show-effect="slideInUp"
                    data-hide-effect="slideOutDown">
                    <span className="fas fa-arrow-up u-go-to__inner"></span>
                </a>

            </div >
        )
    }


    return (
        <>
            {aside}
        </>
    )
}

export default Sidebar
