class Utils{
    constructor(){
        this._token=null;
    }
    set token(token){
        this._token=token
    }

    fetch(url,config){
        const defaultConfig={
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
            method: "GET",
        }
        if(this._token){
            defaultConfig.headers["Authorization"]="Bearer " + this._token
        }
        
        const fetchConfig={...defaultConfig,...config};

        return fetch(url,fetchConfig)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            else{
                throw(response.statusText)
            }
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
const utils=new Utils()
export default utils