import React, {Component} from 'react'
import $ from 'jquery'
import 'datatables.net'
import './table.css'
// import '../../../node_modules/datatables.net-bs/css/dataTables.bootstrap.css'

class Table extends Component{
    
    componentDidMount(){
       
    }

    componentWillUnmount(){
        // $('.data-table-wrapper')
        // .find('table')
        // .DataTable()
        // .destroy(true);
    }

    shouldComponentUpdate(nextProps,nextState) {
        if(!nextProps.config)
            return false
        if(!$.fn.DataTable.isDataTable(this.refs.table)){
            this.createTable(nextProps)
        }
        
        if(this.props.data !== nextProps.data){
            let table=$(this.refs.table).DataTable()
            table.clear()
            table.rows.add(nextProps.data).draw()
        }

        return false;
    }
    createTable(props){
        const defaultConfig={
            //dom: '<"data-table-wrapper"t>',
            data:[],
            ordering: false
        }
        let config={...defaultConfig,...props.config,...props.data}
        $(this.refs.table).DataTable(config)

    }
    render(){
        return(
            <div>
                <table id="example" className="table table-striped table-bordered" cellSpacing="0" width="100%" ref="table"/>
            </div>
        )
    }
}

export default Table;