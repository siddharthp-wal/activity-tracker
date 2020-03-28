import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import handleSignIn from './axiosSignIn';
import { useDispatch, useSelector} from "react-redux";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function SignIn(props) {
    
    const [login, setLogin] = useState(false);
    const dispatch = useDispatch();
    
    function onFinish(values){
        // console.log('Success:', values);
        handleSignIn(values.username,values.password)
        .then(
            (response)=>{
                if(response){
                    console.log(response)
                    setLogin(true);
                    sessionStorage.setItem('jwt',response.data.token)
                    sessionStorage.setItem('id',response.data.id)
                    localStorage.setItem('username',response.data.email)
                    dispatch({type:'ADD_USER'},[dispatch]);
                }
            }
         )
        .catch(err => console.log(err))
    };

    const isAuth = useSelector(state => state.isAuthenticated);
    console.log("isAuth:",isAuth);

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <React.Fragment>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
            {login && <Redirect to="/report" />}
        </React.Fragment>
    );
}

export default SignIn;