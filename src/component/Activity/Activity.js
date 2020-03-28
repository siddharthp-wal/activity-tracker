import React, { useState } from "react";
import { DatePicker, TimePicker, Input, Button } from "antd";
import moment from "moment";
import dateString from "./dateString";
import getTime from "./getTime";
import getDuration from "./getDuration";
import printActivity from "./printActivity";
import { Redirect } from "react-router-dom";
import CreateActivity from "./axiosActivity";
import ShowActivityTable from "./showActivity/showActivity";
// import { CaretRightOutlined,CaretLeftOutlined } from '@ant-design/icons';

function Activity(props) {
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [activityTitle, setActivityTitle] = useState();
  const [redirection, setRedirection] = useState();

  const createActivityHandler = obj => {
    CreateActivity(obj)
      .then(resp => {
        console.log(resp);
        // setRedirection(true);
        printActivity(resp);
      })
      .catch(err => console.log(err));
    // document.forms["id_form"].reset();
  };

  let msg = getDuration(endTime, startTime);

  return (
    <React.Fragment>
      Activity :
      <Input
        onChange={event => setActivityTitle(event.target.value)}
        placeholder="Enter an activity"
      />
      <br />
      <br />
      Date :
      <br />
      <DatePicker
        onChange={date => {
          setDate(dateString(date));
        }}
      />
      <br />
      <br />
      Start Time :
      <br />
      <TimePicker
        placeholder="Start Time"
        onChange={time => {
          setStartTime(getTime(time));
        }}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
      />
      <br />
      <br />
      End Time :
      <br />
      <TimePicker
        placeholder="End Time"
        max="24:00"
        onChange={time => {
          setEndTime(getTime(time));
        }}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
      />
      <br />
      <br />
      <span>{msg}</span>
      <br />
      <Button
        onClick={() =>
          createActivityHandler({
            loginId: sessionStorage.getItem("id"),
            title: activityTitle,
            date,
            starttime: startTime,
            endtime: endTime
          })
        }
      >
        Add Activity
      </Button>
      {redirection && <Redirect to="/report" />}
      <div>
        {/* we will make a table to show activity here */}
        <ShowActivityTable></ShowActivityTable>
      </div>
    </React.Fragment>
  );
}

export default Activity;
