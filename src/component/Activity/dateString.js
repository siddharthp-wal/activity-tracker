import moment from 'moment';

export default function dateString(dateObject){
    const dt = moment(dateObject).toDate()
    const month = dt.getMonth()+1
    return dt.getDate()+"-"+month+"-"+dt.getFullYear();
}
