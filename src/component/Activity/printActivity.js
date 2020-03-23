export default function printActivity(activity){
    console.log(activity);
    localStorage.setItem("activity",JSON.stringify(activity));
}