import axios from '../../axios';

export default function handleSignUp(email,password){
    axios.post('users',{"email":email,"password":password})
    .then(
       (response)=>{
           console.log(response.data);
       }
    ).catch(err => console.log(err))
}

