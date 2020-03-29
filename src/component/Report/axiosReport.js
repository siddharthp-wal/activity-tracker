import axios from '../../axios';

export default function getActivities(date){

    const id = sessionStorage.getItem("id");

    return axios.get(`user/${id}/report/"${date}"`)
}

