import React,{Component} from 'react'
import {actions} from '../../modules/listsRedux'
import {connect} from 'react-redux'
import { Button} from 'reactstrap'
import  CreateListModal from '../../components/createListModal'


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
    }

    openModal=()=>{
        this.props.openModal()
    }

    toggle=()=>{
        if(this.props.lists.isModalOpen){
            this.props.closeModal()
        }
        else{
            this.props.openModal()
        }
    }

    createList=()=>{
        console.log('create list')
        let values=this.props.listForm.values
        this.props.createList(values)

    }

    render() {
        console.log('init');
        const {isModalOpen,lists}=this.props.lists
        let liList
        if(lists){
            liList=lists.map(l=><li>{l.name + " - " +l.description}</li>)
        }
        
        return(
            <div>
                <div>List screen</div>
                <ul>
                    {liList}
                </ul>
                <Button color="danger" onClick={ e=>{ e.preventDefault();this.openModal()}}> Open Modal </Button>
                <CreateListModal isOpen={isModalOpen} toggle={e=>{this.toggle()}} onSubmit={e=>{this.createList()}} ></CreateListModal>
            </div>
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
        createList:(list) =>dispatch(actions.createList(list))
})

export default connect(mapStateToProps,mapDispatchToProps)(Lists);