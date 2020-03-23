import { Table} from 'antd';
import React,{useState,useEffect} from 'react';
import getActivities from './axiosReport';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'StartTime',
    key: 'starttime',
    dataIndex: 'starttime',
  },
  {
    title: 'EndTime',
    key: 'endtime',
    dataIndex: 'endtime',
  },
];


export default function Report(){
    const [reportActivity,setReportActivity] = useState();
    useEffect(()=>{getActivities(1,setReportActivity);},[])
    let data 
    try{
        data = reportActivity.activity;
        console.log(data);
    }
    catch(e){
        console.error(e)
    }
    return(<div>
        <Table columns={columns} dataSource={data} />
    </div>)
}