export default function Sidebar(){
    return (
        <>
        <aside id="sidebarContent" className="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler">
            <div className="u-sidebar__scroller">
                <div className="u-sidebar__container">
                    <div className="js-scrollbar u-header-sidebar__footer-offset pb-3">
                        
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
                       
                        <div className="js-scrollbar u-sidebar__body">
                            <div className="u-sidebar__content u-header-sidebar__content">
                                <form className="js-validate">
                                  
                                    <div id="login" data-target-group="idForm">
                                     
                                        <header className="text-center mb-7">
                                        <h2 className="h4 mb-0">Welcome Back!</h2>
                                        <p>Login to manage your account.</p>
                                        </header>
                                      
                                        <div className="form-group">
                                            <div className="js-form-message js-focus-state">
                                                <label className="sr-only" for="signinEmail">Email</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="signinEmailLabel">
                                                            <span className="fas fa-user"></span>
                                                        </span>
                                                    </div>
                                                    <input type="email" className="form-control" name="email" id="signinEmail" placeholder="Email" aria-label="Email" aria-describedby="signinEmailLabel" required
                                                    data-msg="Please enter a valid email address."
                                                    data-error-className="u-has-error"
                                                    data-success-className="u-has-success" />
                                                </div>
                                            </div>
                                        </div>
                                      
                                        <div className="form-group">
                                            <div className="js-form-message js-focus-state">
                                              <label className="sr-only" for="signinPassword">Password</label>
                                              <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="signinPasswordLabel">
                                                        <span className="fas fa-lock"></span>
                                                    </span>
                                                </div>
                                                <input type="password" className="form-control" name="password" id="signinPassword" placeholder="Password" aria-label="Password" aria-describedby="signinPasswordLabel" required
                                                   data-msg="Your password is invalid. Please try again."
                                                   data-error-className="u-has-error"
                                                   data-success-className="u-has-success" />
                                              </div>
                                            </div>
                                        </div>
                                      

                                        <div className="d-flex justify-content-end mb-4">
                                            <a className="js-animation-link small link-muted" href="javascript:;"
                                               data-target="#forgotPassword"
                                               data-link-group="idForm"
                                               data-animation-in="slideInUp">Forgot Password?</a>
                                        </div>

                                        <div className="mb-2">
                                            <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
                                        </div>

                                        <div className="text-center mb-4">
                                            <span className="small text-muted">Do not have an account?</span>
                                            <a className="js-animation-link small text-dark" href="javascript:;"
                                               data-target="#signup"
                                               data-link-group="idForm"
                                               data-animation-in="slideInUp">Signup
                                            </a>
                                        </div>

                                        <div className="text-center">
                                            <span className="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                                        </div>

                                     
                                        <div className="d-flex">
                                            <a className="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                                              <span className="fab fa-facebook-square mr-1"></span>
                                              Facebook
                                            </a>
                                            <a className="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                                              <span className="fab fa-google mr-1"></span>
                                              Google
                                            </a>
                                        </div>
                                    
                                    </div>

                                    <div id="signup" style={{display: "none", opacity: "0"}} data-target-group="idForm">
                                    
                                        <header className="text-center mb-7">
                                        <h2 className="h4 mb-0">Welcome to Electro.</h2>
                                        <p>Fill out the form to get started.</p>
                                        </header>
                                     
                                        <div className="form-group">
                                            <div className="js-form-message js-focus-state">
                                                <label className="sr-only" for="signupEmail">Email</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="signupEmailLabel">
                                                            <span className="fas fa-user"></span>
                                                        </span>
                                                    </div>
                                                    <input type="email" className="form-control" name="email" id="signupEmail" placeholder="Email" aria-label="Email" aria-describedby="signupEmailLabel" required
                                                    data-msg="Please enter a valid email address."
                                                    data-error-className="u-has-error"
                                                    data-success-className="u-has-success" />
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="form-group">
                                            <div className="js-form-message js-focus-state">
                                                <label className="sr-only" for="signupPassword">Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="signupPasswordLabel">
                                                            <span className="fas fa-lock"></span>
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" name="password" id="signupPassword" placeholder="Password" aria-label="Password" aria-describedby="signupPasswordLabel" required
                                                    data-msg="Your password is invalid. Please try again."
                                                    data-error-className="u-has-error"
                                                    data-success-className="u-has-success" />
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div className="form-group">
                                            <div className="js-form-message js-focus-state">
                                            <label className="sr-only" for="signupConfirmPassword">Confirm Password</label>
                                                <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="signupConfirmPasswordLabel">
                                                        <span className="fas fa-key"></span>
                                                    </span>
                                                </div>
                                                <input type="password" className="form-control" name="confirmPassword" id="signupConfirmPassword" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="signupConfirmPasswordLabel" required
                                                data-msg="Password does not match the confirm password."
                                                data-error-className="u-has-error"
                                                data-success-className="u-has-success" />
                                                </div>
                                            </div>
                                        </div>
                                      

                                        <div className="mb-2">
                                            <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
                                        </div>

                                        <div className="text-center mb-4">
                                            <span className="small text-muted">Already have an account?</span>
                                            <a className="js-animation-link small text-dark" href="javascript:;"
                                                data-target="#login"
                                                data-link-group="idForm"
                                                data-animation-in="slideInUp">Login
                                            </a>
                                        </div>

                                        <div className="text-center">
                                            <span className="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                                        </div>

                                        <div className="d-flex">
                                            <a className="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                                                <span className="fab fa-facebook-square mr-1"></span>
                                                Facebook
                                            </a>
                                            <a className="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                                                <span className="fab fa-google mr-1"></span>
                                                Google
                                            </a>
                                        </div>
                                     
                                    </div>
                            

                               
                                    <div id="forgotPassword" style= {{ display: "none", opacity: "0" }} data-target-group="idForm">
                                     
                                        <header className="text-center mb-7">
                                            <h2 className="h4 mb-0">Recover Password.</h2>
                                            <p>Enter your email address and an email with instructions will be sent to you.</p>
                                        </header>
                                   

                                   
                                        <div className="form-group">
                                            <div className="js-form-message js-focus-state">
                                                <label className="sr-only" for="recoverEmail">Your email</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="recoverEmailLabel">
                                                            <span className="fas fa-user"></span>
                                                        </span>
                                                    </div>
                                                    <input type="email" className="form-control" name="email" id="recoverEmail" placeholder="Your email" aria-label="Your email" aria-describedby="recoverEmailLabel" required
                                                    data-msg="Please enter a valid email address."
                                                    data-error-className="u-has-error"
                                                    data-success-className="u-has-success" />
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div className="mb-2">
                                            <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Recover Password</button>
                                        </div>

                                        <div className="text-center mb-4">
                                            <span className="small text-muted">Remember your password?</span>
                                            <a className="js-animation-link small" href="javascript:;"
                                               data-target="#login"
                                               data-link-group="idForm"
                                               data-animation-in="slideInUp">Login
                                            </a>
                                        </div>
                                    </div>
                                  
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </aside>

        <a className="js-go-to u-go-to" href="#"
            data-position='{"bottom": 15, "right": 15 }'
            data-type="fixed"
            data-offset-top="400"
            data-compensation="#header"
            data-show-effect="slideInUp"
            data-hide-effect="slideOutDown">
            <span className="fas fa-arrow-up u-go-to__inner"></span>
        </a>
        </>
    )
}