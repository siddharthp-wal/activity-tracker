import { Table } from "antd";
import React, { useState, useEffect } from "react";
import ShowActivity from "./axiosShowActivity";
import { Card, DatePicker } from 'antd';
import moment from 'moment';

function dateString(dateObject){
  const dt = moment(dateObject).toDate()
  const month = dt.getMonth()+1
  return dt.getDate()+"-"+month+"-"+dt.getFullYear();
}


const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "StartTime",
    key: "starttime",
    dataIndex: "starttime"
  },
  {
    title: "EndTime",
    key: "endtime",
    dataIndex: "endtime"
  }
];

export default function ShowActivityTable() {

  const [activity, setActivity] = useState();

  const onSubmitActivity = (date)=>{
    ShowActivity(date).then(response => {
      setActivity(response.data.activity);
    });

  }

  console.log("avtivityvalue", activity);

  const dateForDatePicker=()=>{
    let dateT = new Date();
    let dateTi = moment(dateString(dateT)).format("YYYY-MM-DD")
    return dateTi
  }

  useEffect(() => {
    onSubmitActivity(dateString(dateForDatePicker))
  }, []);

  // onSubmitActivity()

  console.log("dfsaas",dateForDatePicker())

  const dateFormat = "YYYY-MM-DD";
  return (
    <div>
      <Card title="Activity Table " bordered={false}>
      <DatePicker
        // defaultValue=
        onChange={date => {
          console.log("From showActivity datepicker",dateString(date))
          onSubmitActivity(dateString(date))
        }}
      />
       <Table columns={columns} dataSource={activity} />
    </Card>
    </div>
  );
}
