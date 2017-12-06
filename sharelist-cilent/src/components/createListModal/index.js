import React, { Component } from 'react'
//import {Field,reduxForm} from 'redux-form'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import CreateListForm from '../creatListForm'

class CreateListModal extends Component{
    // constructor(props,context){
    //     super(props,context)
    //    // this.state={modal:false}

    //     //this.toggle = this.toggle.bind(this);
        
    // }
   
    createList=(values) =>{
        console.log('create List')
        //const values=this.props.listForm.values
    }

    render(){
        const {isOpen,toggle,onSubmit}=this.props
        
        return(
        <div>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <CreateListForm />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onSubmit}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
        )
    }
}

export default  CreateListModal;
// export default CreateListForm({
//     form:'login'
// })(LoginForm);