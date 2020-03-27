import axios from '../../axios';

export default function handleSignIn(email,password){
    return axios.put('users',{"email":email,"password":password})
}