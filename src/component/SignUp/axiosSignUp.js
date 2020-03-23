import axios from '../../axios';

export default function handleSignUp(email,password,setLogup){
    axios.post('users',{"email":email,"password":password})
    .then(
       (response)=>{
           if(response){
               console.log(response.data);
               setLogup(true);
           }
       }
    ).catch(err => console.log(err))
}

