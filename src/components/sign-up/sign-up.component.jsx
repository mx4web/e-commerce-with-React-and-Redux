import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        label='Display Name'
                        handleChange={this.handleChange}
                    ></FormInput>
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        label='email'
                        handleChange={this.handleChange}
                    ></FormInput>
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        label='password'
                        handleChange={this.handleChange}
                    ></FormInput>
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        label='confirm password'
                        handleChange={this.handleChange}
                    ></FormInput>
                    <CustomButton>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}
