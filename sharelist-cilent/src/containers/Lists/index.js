import React,{Component} from 'react'
import {actions} from '../../modules/listsRedux'
import {connect} from 'react-redux'
import { Button,Container,Row,Col} from 'reactstrap'
import  CreateListModal from '../../components/createListModal'
import Table from '../../components/table'
import {objIcon} from '../../components/Icon'
import {ICONS} from '../../styles/Icons/Icons'


class Lists extends Component{
    // constructor(props){
    //     super(props)
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('props')
    //     return true
    // }
    componentDidMount(){
        this.props.fetchLists()
        const deleteIcon=objIcon({icon:ICONS.trashcan})
        this.tableConfig={
            columnDefs:[
                {title:"Id",data:"id",targets:0},
                {title:"Name",data:"name",targets:1},
                {title:"Description",data:"description",targets:2},
                {title:"Delete",targets:3, render:(data,type,row,meta)=>{
                    // return '<div id="'+row.id+'" class="deleteList">'+deleteIcon+'</div>'
                    return '<div id="'+row.id+'" class="deleteList">'+deleteIcon+'</div>'
                }}
            ]
        };
        
        let element=document.querySelector('#lists')
        element.addEventListener("click", (e)=>{
            if(e.target.closest('div.deleteList'))
                return this.deleteList(e.target.closest('div.deleteList').id)
        });
    }



    openModal=()=>{
        this.props.openModal()
    }
    closeModal=()=>{
        this.props.closeModal()
    }
   
    createList=(list)=>{
        let temp=this.props.createList(list)
    }

    deleteList=(id)=>{
        console.log('delete '+ id)
        this.props.deleteList(id)
    }

    render() {
        const {isModalOpen,lists}=this.props.lists
        
        return(
            // <div className="container">
            <Container fluid id="lists">
                <Row>
                    <Col xs="12">
                        <h1>Lists Screen</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Table config={this.tableConfig} data={lists}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Button color="success" onClick={this.openModal}> Create New List </Button>
                    </Col>
                </Row>
                <CreateListModal isOpen={isModalOpen} close={this.closeModal}  onSubmit={this.createList} ></CreateListModal>
            </Container>
        )
    }
}

const mapStateToProps=state =>({
    lists:state.lists,
    listForm:state.form.createList
})

const mapDispatchToProps=dispatch =>({
        fetchLists:() => dispatch(actions.fetchLists()),
        openModal:() => dispatch(actions.openModal()),
        closeModal:() => dispatch(actions.closeModal()),
        createList:(list) =>dispatch(actions.createList(list)),
        deleteList:(listId) =>dispatch(actions.deleteList(listId))
})

export default connect(mapStateToProps,mapDispatchToProps)(Lists);