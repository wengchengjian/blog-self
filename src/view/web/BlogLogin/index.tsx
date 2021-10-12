import { Drawer, Form, Button, Col, Row, Input, Checkbox } from 'antd';

import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useStores } from '../../../hooks/useStore';
import styles from './index.module.less';
import axios from 'axios';
import { Login, findCurrentUser } from '@/api/v1/common/user/index';

type LoginUser = {
  username: string;
  password: string;
  rememberMe: boolean;
};

const BlogLogin = observer(() => {
  const { userStore } = useStores();

  const [form] = Form.useForm();
  form.setFieldsValue({
    rememberMe: false,
  });
  const onClose = () => {
    userStore.setLoginBtnVisible(false);
  };
  const onSubmit = () => {
    form.submit();
  };
  const onCheckChange = () => {
    form.setFieldsValue({
      rememberMe: !form.getFieldValue('rememberMe'),
    });
  };
  const onFinish = async (values: LoginUser) => {
    const result = await Login(
      {
        username: values.username,
        password: values.password,
        remember: values.rememberMe,
      },
      {
        transformRequest: [
          function (data: any) {
            let ret = '';
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                '=' +
                encodeURIComponent(data[it]) +
                '&';
            }
            return ret;
          },
        ],
        //设置请求头
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    console.log(result);

    //登陆成功

    //设置全局Auth
    userStore.Login(result);

    userStore.setLoginBtnVisible(false);

    getLoginUser();
  };
  const getLoginUser = async () => {
    const res = await findCurrentUser({});

    userStore.setUser(res);
  };

  return (
    <>
      <Drawer
        title="Login in Account"
        width={720}
        onClose={() => onClose()}
        visible={userStore.loginBtnVisible}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => onClose()} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={() => onSubmit()} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form
          form={form}
          name="Login-form"
          layout="vertical"
          onFinish={(values) => onFinish(values)}
        >
          <Row gutter={16}>
            <Col span={12} push={6}>
              <Form.Item
                name="username"
                label="Username"
                hasFeedback
                rules={[
                  {
                    pattern: /^[a-zA-Z][a-zA-Z0-9]{8,16}$/,
                    required: true,
                    message: '用户名必须在8-16个字符之间，且字母开头',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} placeholder="请输入用户名" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} push={6}>
              <Form.Item
                name="password"
                label="Password"
                hasFeedback
                rules={[
                  {
                    pattern: /^[a-zA-Z]\w{5,17}$/,
                    required: true,
                    message:
                      '以字母开头，长度在6~18之间，只能包含字母、数字和下划线',
                  },
                ]}
              >
                <Input placeholder="请输入密码" type="password" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={10} offset={6}>
              <Form.Item name="rememberMe">
                <label htmlFor="check">记住密码：</label>
                <Checkbox id="check" onChange={onCheckChange} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="forgot">
                <Link to="/forgot">忘记密码</Link>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
});

export default BlogLogin;
