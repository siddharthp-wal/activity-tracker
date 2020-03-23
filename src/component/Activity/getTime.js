import moment from 'moment';

export default function getTime(dateObject){
    const dt = moment(dateObject).toDate();
    return (dt.getHours()*60)+(dt.getMinutes()*60)+dt.getSeconds();
}