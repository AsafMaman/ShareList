import React from 'react';
import {Field,reduxForm} from 'redux-form';
import Icon from '../Icon';
import {ICONS} from '../../styles/Icons/Icons';

import './loginForm.css'

const LoginForm=props=>{
    const {handleSubmit,message} =props;
    return(
        <form onSubmit={handleSubmit} className="loginForm">
            <div className="input-group">
                <div className="input-group-addon"><Icon icon={ICONS.email}/></div>
                <Field 
                    name="email"
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div className="input-group">
                <div className="input-group-addon"><Icon icon={ICONS.password}/></div>
                <Field 
                    name="password"
                    className="form-control"
                    component="input"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div className="input-group justify-content-md-center">
                <button type="submit" className="btn btn-info">Submit</button>
            </div>
            <div className="message">{message}</div>
        </form>
    )
}

export default reduxForm({
    form:'login'
})(LoginForm);
