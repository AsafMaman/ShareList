import React,{Component} from 'react'
import {actions} from '../../modules/listsRedux'
import {connect} from 'react-redux'

class Lists extends Component{
    componentDidMount(){
        const {dispatch} =this.props
        dispatch(actions.fetchLists())
    }
    render() {
        return(
            <div>List screen</div>
        )
    }
}

// const Lists=()=>{
//     console.log('List screen');
//     return(
//         <div>Lists screen</div>
//     )
// }

const mapStateToProps = state =>({
    authentication:state.authentication
})

export default connect(mapStateToProps,null)(Lists);