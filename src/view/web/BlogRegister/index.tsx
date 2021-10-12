import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from 'antd';
import styles from './index.module.less';
import moment from 'moment';
import { RootObject as User } from '@/types/request/POST/user/register';
import { register } from '@/api/v1/common/user';
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/useStore';
const { Option } = Select;
const BlogRegister = observer(() => {
  const { userStore } = useStores();
  const [form] = Form.useForm();

  const onClose = () => {
    userStore.setRegisterBtnVisible(false);
  };
  const onSubmit = () => {
    form.submit();
  };
  const onFinish = async (values: User) => {
    await register({
      ...values,
      birthday: moment(values.birthday).format('YYYY-MM-DD'),
    });
  };

  return (
    <>
      <Drawer
        title="Create new Account"
        width={720}
        onClose={() => onClose()}
        visible={userStore.registerBtnVisible}
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
          name="register-form"
          layout="vertical"
          onFinish={(values) => onFinish(values)}
        >
          <Row gutter={16}>
            <Col span={12}>
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
            <Col span={12}>
              <Form.Item
                name="nickName"
                label="NickName"
                hasFeedback
                rules={[
                  {
                    pattern:
                      /^[\u4e00-\u9fa5a-zA-Z_][\u4e00-\u9fa5a-zA-Z0-9_]{4,8}$/,
                    required: true,
                    message: '昵称必须在4-8个字符之间',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} placeholder="请输入昵称" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
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
            <Col span={12}>
              <Form.Item
                name="repassword"
                label="RePassword"
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
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                hasFeedback
                rules={[
                  {
                    pattern:
                      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,

                    required: false,
                    message: '请输入正确的手机号码',
                  },
                ]}
              >
                <Input placeholder="请输入手机号码" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: '请选择性别',
                  },
                ]}
              >
                <Select placeholder="请选择性别">
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="trueName"
                label="TrueName"
                hasFeedback
                rules={[
                  {
                    pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
                    required: false,
                    message: '请输入真实姓名',
                  },
                ]}
              >
                <Input placeholder="请输入真实姓名" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="birthday"
                label="Birthday"
                hasFeedback
                rules={[{ required: true, message: '请选择生日' }]}
              >
                <DatePicker
                  placeholder="请选择生日日期"
                  style={{ width: '100%' }}
                  showToday
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                hasFeedback
                rules={[
                  {
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    required: true,
                    message: '请输入正确的邮箱',
                  },
                ]}
              >
                <Input placeholder="请输入邮箱" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="personalBrief"
                label="Selfdescription"
                rules={[{ required: true, message: '请输入自我描述' }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="请输入自我描述"
                ></Input.TextArea>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
});

export default BlogRegister;
