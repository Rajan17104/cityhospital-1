import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Auth(props) {

    const [authType, setAuthType] = useState('login');
    // const [password, setPassword] = useState('forgot');

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        authType === 'login' ? <h2>Login</h2> :
                            authType === 'signup' ? <h2>Sign Up</h2> : <h2>Reset Password</h2>

                    }

                    {/* <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p> */}
                </div>
                <form action method="post" role="form" className="php-email-form">
                    <div className="row justify-content-center" >
                        {
                            authType === 'login' || authType === 'forgot' ? null :
                                <div className="col-md-7 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div>
                        }

                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>

                        {
                            authType !== 'forgot' ?
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter a password" />
                                    <div className="validate" />
                                </div> : null

                        }

                    </div>
                    {
                        authType === 'login' ?
                            <div className="text-center"><button type="submit">Login</button></div> :
                            authType === 'signup' ?
                                <div className="text-center"><button type="submit">Sign up</button></div> :
                                <div className="text-center"><button type="submit">Submit</button></div>
                    }

                </form>
            </div>
            {
                authType === 'login' ?
                    <>
                        <div className='text-center'>
                            <a href="#" onClick={() => setAuthType('forgot')}>  Forgot password ?</a>
                            <div className='text-center'>
                                <span>You have already account ? <a href="#" onClick={() => setAuthType('sign up')}> Sign up</a></span>
                            </div>
                        </div>
                    </> :
                    <div className='text-center'>
                        <span>Creat new account<a href="#" onClick={() => setAuthType('login')}>  Login</a> </span>
                    </div>
            }<br /><br />

        </section>

    );
}

export default Auth;
