import axios from '../../axios';

export default function getActivities(id,setReportActivity){
    axios.get(`user/${id}/activity`)
    .then(
       (response)=>{
           if(response){
            setReportActivity(response.data);
           }
       }
    ).catch(err => console.log(err))
}

