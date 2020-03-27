//contains code for reducer function.

const Reducer =(state={isAuthenticated:false},{ type , payload }) =>{

    switch(type){
        case 'CLEAR_USER':
            return {isAuthenticated:true};
        default :
            return state;
    }
};
export default Reducer;