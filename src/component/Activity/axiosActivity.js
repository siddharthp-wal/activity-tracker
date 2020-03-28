import axios from '../../axios';

export default function CreateActivity(obj){
    console.log("activity object",obj)
    return axios.post('user/activity',obj)
}