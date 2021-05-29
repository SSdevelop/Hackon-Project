import React, { Component } from 'react';
import FormInput from '../form-input/formInput';
import { auth, signInWithGoogle} from '../../firebase/firebaseUtils';
import './signIn.css';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        // check user details from the database
        // this.setState({email: '', password: ''});
        const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.log(err);
		}
    }

    render() {
        const { email, password } = this.state;
        return(
            <div className='sign-in'>
                <h4 className='title'> Sign In using email and password </h4>
                <form className='sign-in-page' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email'
                        label='Email'
                        value={email}
                        handleChange={this.handleChange} 
                        required
                        autoComplete="off"
                    />
                    <FormInput
                        name='password' 
                        type='password'
                        label='Password'
                        value={password}
                        handleChange={this.handleChange} 
                        required
                        autoComplete="off"
                    />
                    <input type='submit' value='Sign In' class='submit-button' />
                    <input type='submit' value='SignIn with Google' class='submit-button-google' onClick={signInWithGoogle}/>
                </form>
            </div>
        );
    }
}

export default SignIn;