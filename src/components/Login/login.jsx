import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import FormControl from '../common/FormControls/FormsControls';
import z from './Login.module.css';
import f from '../common/FormControls/FormsControls.module.css';


const Input = FormControl("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={z.fieldItem}>
                <Field placeholder={"Login"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div className={z.fieldItem}>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required]} />
            </div>
            <div className={z.fieldItem}>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}  /> remember me
            </div>
            {props.error && 
            <div className={f.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
        
)}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    
    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
    <div className={z.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
)}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);