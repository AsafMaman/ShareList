/* ------------- Types ------------- */
export const types={
    FETCH_LISTS:'LISTS/FETCH',
    FETCH_LISTS_SUCCESS:'LIST/FETCH_LISTS_SUCCESS',
    FETCH_LISTS_FAILED:'LIST/FETCH_LISTS_FAILED',

    OPEN_MODAL:'LISTS/OPEN_MODAL',
    CLOSE_MODAL:'LISTS/CLOSE_MODAL',

    CREATE_LIST:'LISTS/CREATE_LIST',
    CREATE_LIST_SUCCEEDED:"LISTS/CREATE_LIST_SUCCEEDED",
    CREATE_LIST_FAILED:"LISTS/CREATE_LIST_FAILED",

    DELETE_LIST:'LISTS/DELETE_LIST',
    DELETE_LIST_SUCCEEDED:"LISTS/DELETE_LIST_SUCCEEDED",
    DELETE_LIST_FAILED:"LISTS/DELETE_LIST_FAILED"
}
/* ------------- Action Creators ------------- */
export const actions= {
    fetchLists:()=>({type:types.FETCH_LISTS}),
    fetchListsSuccess:(lists)=>({type:types.FETCH_LISTS_SUCCESS,payload:lists}),
    fetchListsfailed:()=>({type:types.FETCH_LISTS_FAILED}),

    openModal:()=>({type:types.OPEN_MODAL}),
    closeModal:() =>({type:types.CLOSE_MODAL}),

    createList:(list) =>({type:types.CREATE_LIST,payload:list}),
    createListSucceeded:() =>({type:types.CREATE_LIST_SUCCEEDED}),

    deleteList:(listId) =>({type:types.DELETE_LIST,payload:listId}),
    deleteListSucceeded:() =>({type:types.DELETE_LIST_SUCCEEDED})
}
/* ------------- Initial State ------------- */
const initalState={
    lists:null,
    fetchStatus:null,
    isModalOpen:false
}
/* ------------- Reducers ------------- */
export default(state=initalState,action)=>{
    switch(action.type) {
        case types.FETCH_LISTS_SUCCESS:{
            return {...state,lists:action.payload,fetchStatus:"success"};
        }
        case types.FETCH_LISTS_FAILED:{
            return {...state,lists:null,fetchStatus:"failed"};
        }

        case types.OPEN_MODAL:{
            return {...state,isModalOpen:true}
        }

        case types.CLOSE_MODAL:{
            return {...state,isModalOpen:false}
        }
        case types.CREATE_LIST_SUCCEEDED:{
            return {...state,isModalOpen:false}
        }
        default:{
            return state;
        }
    }
}