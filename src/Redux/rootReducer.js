//contains code for reducer function.
const initialState ={
    isAuthenticated:false,
}

const Reducer =(state=initialState,{ type , payload }) =>{

    switch(type){
        case 'ADD_USER':
            const username = localStorage.getItem("username")
            if(!username){
                return {isAuthenticated:false};
            }
            else{
                return {isAuthenticated:true};
            }
            
        case 'CLEAR_USER':
            sessionStorage.clear();
            localStorage.clear();
            return {isAuthenticated:false};
        default :
            return state;
    }
};
export default Reducer;