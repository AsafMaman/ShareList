/* ------------- Types ------------- */
export const types={
    FETCH_LISTS:'LISTS/FETCH',
    FETCH_LISTS_SUCCESS:'LIST/FETCH_LISTS_SUCCESS',
    FETCH_LISTS_FAILED:'LIST/FETCH_LISTS_FAILED'
}
/* ------------- Action Creators ------------- */
export const actions= {
    fetchLists:(lists)=>({type:types.FETCH_LISTS}),
    fetchListsSuccess:(lists)=>({type:types.FETCH_LISTS_SUCCESS,payload:lists}),
    fetchListsfailed:()=>({type:types.FETCH_LISTS_FAILED})
}
/* ------------- Initial State ------------- */
const initalState={
    lists:null,
    fetchStatus:null
}
/* ------------- Reducers ------------- */
export default(state=initalState,action)=>{
    switch(action.type) {
        case types.FETCH_LISTS_SUCCESS:{
            return {...state,lists:action.payload.lists,fetchStatus:"success"};
        }
        case types.FETCH_LISTS_FAILED:{
            return {...state,lists:null,fetchStatus:"failed"};
        }
        default:{
            return state;
        }
    }
}