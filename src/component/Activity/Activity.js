import React, { useState } from 'react';
import { DatePicker, TimePicker, Input, Button } from 'antd';
import moment from 'moment';
import dateString from './dateString';
import getTime from './getTime';
import getDuration from './getDuration';
import printActivity from './printActivity';
import { Redirect } from 'react-router-dom';

function Activity(props) {
    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [activityTitle, setActivityTitle] = useState();
    const [activity, setActivity] = useState([{
        "user":localStorage.getItem("username"),
        "startTime": null,
        "endTime": null,
        "date": null,
        "duration": null,
        "activity": null,
        "added": false
    }]);
    printActivity(activity);
    let msg = getDuration(endTime, startTime);
    return (
        <React.Fragment>
            Activity :
        <Input onChange={(event) => setActivityTitle(event.target.value)}
                placeholder="Enter an activity" />
            <br />
            <br />
            Date :
        <br />
            <DatePicker onChange={
                (date) => {
                    setDate(date);
                }
            } />
            <br />
            <br />
            Start Time :
        <br />
            <TimePicker placeholder="Start Time" onChange={
                (time) => {
                    setStartTime(time);
                }
            } defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            <br />
            <br />
            End Time :
        <br />
            <TimePicker placeholder="End Time" min={activity.startTime} max="24:00" onChange={
                (time) => {
                    setEndTime(time);
                }
            } defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />

            <br />
            <br />
            <span>{msg}</span>
            <br />
            <Button onClick={() => {
                setActivity(
                    {
                        "startTime": getTime(startTime),
                        "endTime": getTime(endTime),
                        "date": dateString(date),
                        "duration": getTime(endTime) - getTime(startTime),
                        "activity": activityTitle,
                        "added": true
                    }
                );
            }
            }>Add Activity</Button>

            {activity.added && <Redirect to="/report" />}
        </React.Fragment>
    );
}

export default Activity;