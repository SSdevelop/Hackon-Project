import React from 'react';
import SignIn from '../../components/sign-in/signIn';
import SignUp from '../../components/sign-up/signup';
import './sign-in-sign-up.css';

const SignInAndSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;