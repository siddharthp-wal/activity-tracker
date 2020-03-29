import axios from '../../../axios';

export default function ShowActivity(date){
    return axios.get(`user/${sessionStorage.getItem("id")}/activity/"${date}"`)
    
}