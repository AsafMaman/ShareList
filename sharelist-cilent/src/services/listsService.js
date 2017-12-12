import utils from '../commons/utils'
class listsService{

    listsFetch(){
        const url="http://localhost:3000/api/Lists"

        return utils.fetch(url,
            {
                method: "GET",
            }
        )
    }

    createList(list){
        const url="http://localhost:3000/api/Lists"

        return utils.fetch(url,{
            method:"POST",
            body:JSON.stringify(list)
        })
    }
    
    deleteList(listId){
        const url="http://localhost:3000/api/Lists/" +listId

        return utils.fetch(url,{
            method:"Delete",
        })
    }
}

export default listsService;