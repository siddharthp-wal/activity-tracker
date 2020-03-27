import React, { useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import handleSignIn from './axiosSignIn';

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
    
    function onFinish(values){
        console.log('Success:', values);
        handleSignIn(values.username,values.password)
        .then(
            (response)=>{
                if(response){
                    // console.log(response.data);
                    // localStorage.setItem("username",JSON.stringify(response.data.email));
                    // sessionStorage.setItem("jwt",JSON.stringify(response.data.token));
                    
                    setLogin(true);
                }
            }
         )
        .catch(err => console.log(err))
    };

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