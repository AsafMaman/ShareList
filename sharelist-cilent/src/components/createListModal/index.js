import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup,Col,Form } from 'reactstrap'
// import CreateListForm from '../creatListForm'

class CreateListModal extends Component{
    constructor(props,context){
        super(props,context)
       this.state={
           name:'',
           description:''
       }     
    }
   
    handleChange=(e)=>{
        const target=e.target
        const value=target.value
        const name=target.name

        this.setState({[name]:value})
    }

    handleSubmit=()=>{
        this.props.onSubmit(this.state)
    }

    componentWillReceiveProps(nextProps){
        if(this.props.isOpen===false && nextProps.isOpen===true){
            this.setState({name:'',description:''})
        }
    }

    render(){
        const {isOpen,toggle,close}=this.props
        return(
            <div>
                <Modal isOpen={isOpen} toggle={toggle} >
                    <ModalHeader toggle={this.toggle}>Share</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
                                <Col sm={10}>
                                    <input type="text" name="name" placeholder="List Name" value={this.state.name} onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col sm={10}>
                                    <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button action="submit" color="primary" onClick={this.handleSubmit}>OK</Button>
                        <Button color="secondary" onClick={close} value={false}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default  CreateListModal;
