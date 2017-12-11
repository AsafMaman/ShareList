import React, { Component } from 'react'
import {Route,Switch,NavLink} from 'react-router-dom'
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem} from 'reactstrap'
import List from '../lists'
import About from '../about'

import './shared.css'

class Shared extends Component{
    constructor(props){
        super(props)
        this.state = {isOpen: false};
    }

    toggle=(e) =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        return(
            <div>
                <Navbar color="dark" className="navbar-dark navbar-expand-sm" expand fixed="top">
                    {/* <NavbarBrand><NavLink className="nav-link" to="/lists">Share List</NavLink></NavbarBrand> */}
                    <NavbarBrand href="/lists">Share List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/lists">Lists</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className="rootContent">
                    <Switch>
                        <Route path="/lists"  component={List}/>
                        <Route path="/about"  component={About}/>
                    </Switch>
                </div>    
            </div>
        )
    }
}

export default Shared;