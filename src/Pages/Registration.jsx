import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { LoginSocialFacebook } from 'reactjs-social-login'
function Registration() {
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <h5 className='text-center text-danger'>Create An Account.</h5>
                    </div>
                </div>
                <div className="row login">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <form action="">
                            <div className='my-3 position-relative'>
                                <input className='in form-control' type="text" placeholder='Name' />
                                <i className=" fs-4 position-absolute bi bi-person"></i>
                            </div>
                            <div className='my-3 position-relative'>
                                <input className='in form-control' type="email" placeholder='Email' />
                                <i className=" fs-4 position-absolute bi bi-envelope"></i>
                            </div>
                            <div className='position-relative mb-3'>
                                <input className='in form-control ' type="password" placeholder='Password' />
                                <i className=" fs-4 position-absolute bi bi-file-lock"></i>
                            </div>
                            <div className='position-relative'>
                                <input className='in form-control ' type="password" placeholder='Confirm Password' />
                                <i className=" fs-4 position-absolute bi bi-file-lock"></i>
                            </div>
                            <div className="row my-2">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <p className='text-end'><Link to="">Forgot password?</Link></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <button className='btn btn-danger w-100'>Create</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center col-md-12 col-sm-12">
                                    <p>Already have an account?<Link to="/users/login">Log In</Link></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                    <p className='text-center'>or</p>
                                    <LoginSocialFacebook
                                        appId='281586187730480'
                                        onResolve={(response) => {
                                            console.log(response);
                                        }}
                                        onReject={(error) => {
                                            console.log(error);
                                        }}
                                    >
                                        <FacebookLoginButton className='ps-5' />
                                    </LoginSocialFacebook>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className='w-100 img-fluid' src="../images/register_banner.jpg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Registration
