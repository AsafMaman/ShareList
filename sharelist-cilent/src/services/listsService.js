import utils from '../commons/utils'
class listsService{

    listsFetch(){
        const url="http://localhost:3000/api/Lists"

        return utils.fetch(url,
            {
                method: "GET",
                //body: JSON.stringify({Email:email, Password:password})
            }
        )
    }
}

export default listsService;