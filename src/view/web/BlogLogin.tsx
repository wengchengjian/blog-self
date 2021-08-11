import React, { useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { LoginAction } from "../../types/Login";
const { Option } = Select;
type BlogLoginProps = {
  close: () => LoginAction;
  submit: () => LoginAction;
  login: boolean;
};
const BlogLogin = (props: BlogLoginProps) => {
  
  const onClose = () => {
    props.close();
  };
  const onSubmit = () => {
    props.submit();
  };

  return (
    <>
      <Drawer
        title="Create new Account"
        width={720}
        onClose={()=>onClose()}
        visible={props.login}
        footer={
          <div style={{ textAlign: "right" }}>
            <Button onClick={() => onClose()} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={() => onSubmit()} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "请输入用户名!s" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="请输入用户名"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="type"
                rules={[{ required: true, message: "请选择账号类型" }]}
              >
                <Select placeholder="请选择类型">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="approver"
                rules={[{ required: false, message: "请选择推荐者" }]}
              >
                <Select placeholder="请选择推荐者">
                  <Option value="jack">Jack Cheng</Option>
                  <Option value="tom">Tom mao</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="dateTime"
                rules={[{ required: true, message: "请选择生日" }]}
              >
                <DatePicker style={{ width: "100%" }} showTime />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="description"
                label="description"
                rules={[{ required: true, message: "请输入自我描述" }]}
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
};

export default BlogLogin;
