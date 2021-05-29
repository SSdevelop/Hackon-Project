import React, { Component } from 'react';
import FormInput from '../form-input/formInput';
import { auth, createUserProfileRequest } from '../../firebase/firebaseUtils';
import './signUp.css';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();

        // this.setState({displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // });

        const { displayName, email, password, confirmPassword } = this.state;

            if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
            }

            try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileRequest(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            } catch (error) {
            console.error(error);
            }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h3 className='title'>Don't have an account? Let us help you create one.</h3>
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text'
                        label='Enter your Display name'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                        autoComplete='off'
                    />
                    <FormInput 
                        name='email'
                        type='email'
                        label='Enter your Email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                        autoComplete='off'
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        label='Enter password'
                        value={password}
                        handleChange={this.handleChange}
                        required
                        autoComplete='off'
                    />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                        autoComplete='off'
                    />
                    <input type='submit' value='Sign Up' className='sign-up-button'/>
                </form>
            </div>
        );
    }
}

export default SignUp;