import utils from '../commons/utils'
class authenticationService{

    login(email,password){
        const url="http://localhost:3000/api/Authentication/Token"

        return utils.fetch(url,
            {
                method: "POST",
                body: JSON.stringify({Email:email, Password:password})
            }
        )
    }
}

export default authenticationService;