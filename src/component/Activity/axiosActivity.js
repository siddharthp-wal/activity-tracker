import axios from '../../axios';

export default function CreateActivity(obj){
    return axios.post('user/activity',obj)
}