//contains code for reducer function.
import {useState} from 'react';

const Reducer =(state={isAuthenticated:false},{ type , payload }) =>{

    // const [ isAuthenticated, setisAuthenticated] = useState();

    switch(type){
        case 'CLEAR_USER':
                return {isAuthenticated:true}
        default :
            return state;
    }
};

export default Reducer;