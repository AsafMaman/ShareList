import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class Authorization extends Component {
   
    render() {
        const {component:Component,isLoggedIn,...rest}=this.props;
        return(
            <Route {...rest} render ={props=>{
                return isLoggedIn===true
                ?<Component {...this.props}/>
                :<Redirect to ="/login" />                    
            }} />
        )
    }
}

const mapStateToProps= state=>{
    return{
        isLoggedIn:state.authentication.isLoggedIn
    }
}

export default connect(mapStateToProps,null)(Authorization);