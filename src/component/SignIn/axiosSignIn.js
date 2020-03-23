import axios from '../../axios';

export default function handleSignIn(email,password,setLogin){
    axios.put('users',{"email":email,"password":password})
    .then(
       (response)=>{
           if(response){
               console.log(response.data);
               localStorage.setItem("username",JSON.stringify(response.data.email));
               sessionStorage.setItem("jwt",JSON.stringify(response.data.token));
               setLogin(true);
           }
       }
    ).catch(err => console.log(err))
}

