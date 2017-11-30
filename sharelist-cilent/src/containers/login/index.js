import React,{Component} from 'react';
import LoginForm from '../../components/loginForm';
import {actions} from '../../modules/authenticationRedux';
import {connect} from 'react-redux';

import  './login.css';

class LoginPage extends Component{
    submit= values =>{
        const {dispatch} =this.props
        dispatch(actions.login(values.email,values.password))
    }
    
    render(){
        const {authentication}=this.props;
        let message=authentication.isLoggedIn===false?'Invalid userName or password.':null;

        return(
            <div className="container-fluid loginPage">
                <div className="row justify-content-md-center">
                    <div className="col col-sm-7 col-md-6 col-lg-5 col-xl-3">
                        <LoginForm onSubmit ={this.submit} message={message} />
                    </div>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = state =>({
    authentication:state.authentication
})

export default connect(mapStateToProps,null)(LoginPage);