/* ------------- Types ------------- */
export const types={
    LOGIN_REQUEST:'AUTH/LOGIN_REQUEST',
    LOGIN_SUCCESS:'AUTH/LOGIN_SUCCESS',
    LOGIN_FAILED:'AUTH/LOGIN_FAILED'
}
/* ------------- Action Creators ------------- */
export const actions= {
    login:(user,password)=>({type:types.LOGIN_REQUEST,payload:{user:user,password:password}})
}
/* ------------- Initial State ------------- */
const initalState={
    isLoggedIn:null,
    token:null,
    userId:null,
    userName:null,
    email:null
}
/* ------------- Reducers ------------- */
export default(state=initalState,action)=>{
    switch(action.type) {
        case types.LOGIN_SUCCESS:{
            return {...state,
                    isLoggedIn:true,
                    token:action.payload.token,
                    userId:action.payload.userId,
                    userName:action.payload.userName,
                    email:action.payload.email,
                };
        }
        case types.LOGIN_FAILED:{
            return {...state,isLoggedIn:false};
        }
        default:{
            return state;
        }
    }
}