import moment from 'moment';

export default function dateString(dateObject){
    const dt = moment(dateObject).toDate()
    return dt.getFullYear()+""+dt.getMonth()+""+dt.getDate();
}
