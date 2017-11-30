import authenticationService from './authenticationService'
import listsService from './listsService'

export const authentication= authenticationService
export const lists=listsService

const services={
    authenticationService:authentication,
    listsService:lists
}

export default services