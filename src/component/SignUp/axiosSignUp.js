import axios from '../../axios';

export default function handleSignUp(email,password){
    return axios.post('users',{"email":email,"password":password})
}

