import { Table } from "antd";
import React, { useEffect, useState } from "react";
import ShowActivity from "./axiosShowActivity";
import { Card, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import dateString from "../dateString";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";

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
  const dispatch = useDispatch();
  dispatch({ type: "CURRENT_DATE" }, [dispatch]);

  

  const [activity, setActivity] = useState();

  function onChangeHandler(obj) {
    ShowActivity(obj).then(resp => {
      setActivity(resp.data.activity);
    });
  }

  function handlePrevious(){
    dispatch({ type: "DECREMENT_DATE" }, [dispatch]);
  }

  function handleNext(){
    dispatch({ type: "INCREMENT_DATE" }, [dispatch]);
  }

  const CURRENT_DATE = useSelector(state => state.dateT);
  console.log(CURRENT_DATE)

  useEffect(() => {
    let mounted = true;
    if (mounted) onChangeHandler(CURRENT_DATE);
    return () => (mounted = false);
  }, [CURRENT_DATE,dispatch]);

  

  return (
    <div>
      <Card title="Activity Table " bordered={true}>
        <CaretLeftOutlined
        onClick={handlePrevious}
        />
        <DatePicker
          onChange={date => {
            onChangeHandler(dateString(date));
          }}
        />
        <CaretRightOutlined
        onClick={handleNext}
        />

        <Table columns={columns} dataSource={activity} />
      </Card>
    </div>
  );
}
