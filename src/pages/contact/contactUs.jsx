import React, { Component } from 'react';
// import Footer from '../../components/Footer/Footer';
import FormInput from '../../components/form-input/formInput';
import firebase from '../../firebase/firebaseUtils';
import './contacts.css';

class ContactUs extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            name: '',
            message: ''
        };

        this.ref = firebase.firestore().collection('contactus');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, message } = this.state;
        if(name === '' || email === '' || message === ''){
            alert("Please fill all the fields in the form to contact us.");
            return;
        }
        this.ref.add(this.state)
            .then(docRef => {this.setState({
                email: '',
                name: '',
                message: ''
            })}).catch(err => {console.error(err)});
    }


    render() {
        const { email, name, message } = this.state;
        return(
            <div>
            <div className='contact-us-form'>
                <h2 className='title'> Contact Us! </h2>
                <form className='form-contact-us' onSubmit={this.handleSubmit} autoComplete="off">
                    <FormInput 
                        name='name' 
                        type='text' 
                        label='Name'
                        value={name}
                        handleChange={this.handleChange}
                        required
                        autoComplete="off"
                    />
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
                        name='message' 
                        type='text' 
                        value={message}
                        label='Message'
                        handleChange={this.handleChange}
                        autoComplete="off"
                        required 
                    />
                    <input type='submit' value='SUBMIT' className='submit-button' />
                </form>

            </div>
            {/* <Footer /> */}
            </div>
            
        );
    }
}

export default ContactUs;