import { Table } from "antd";
import React, { useState, useEffect } from "react";
import getActivities from "./axiosReport";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "ActivityCount",
    dataIndex: "count",
    key: "count"
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration"
  }
];
const dates = [
  { date: "24-3-2020" },
  { date: "25-3-2020" },
  { date: "26-3-2020" },
  { date: "27-3-2020" },
  { date: "28-3-2020" },
  { date: "29-3-2020" },
  { date: "30-3-2020" }
];

const obj = dates.map(arr => {
    return getActivities(arr.date)
    .then(res => {
      return res
    })
});

export default function Report() {
  const [reportActivity, setReportActivity] = useState();
  
  useEffect(()=>{Promise.all(obj).then(response=>setReportActivity(response))},[])
  
let data
  try {
    data = reportActivity.map(re=>re.data);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
