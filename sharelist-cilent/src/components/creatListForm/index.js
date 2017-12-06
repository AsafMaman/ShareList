import React from 'react';
import {Field,reduxForm} from 'redux-form';
// import Icon from '../Icon';
// import {ICONS} from '../../styles/Icons/Icons';

//import './loginForm.css'

const CreateListForm=props=>{
    const {handleSubmit,message} =props;
    return(
        <form onSubmit={handleSubmit} className="loginForm">
            <div className="input-group">
                <div className="input-group-addon">List Name</div>
                <Field 
                    name="name"
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="List Name"
                />
            </div>
            <div className="input-group">
                <div className="input-group-addon">Description</div>
                <Field 
                    name="description"
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="Description"
                />
            </div>
            <div className="message">{message}</div>
        </form>
    )
}

export default reduxForm({
    form:'createList'
})(CreateListForm);
