import { Row, Col, Layout, Menu, Space, Card, Avatar, Affix } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import "../static/sass/components/sider.scss";
const { Meta } = Card;
const { Sider } = Layout;

const BlogSider = () => {
  return (
    <>
      <Affix offsetTop={64}>
        <Sider width={300} className="sider">
          <Space direction="vertical" size="middle">
            <Card
              // style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/2eccf42e29594ebf9e94021477db8ef9.png!sswm"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                }
                title="Weng ChengJian"
                description="This is WebSite Author"
              />
            </Card>
            <Row justify="space-around" className="cate-row">
              <Col>
                <Card bordered={false}>
                  <p className="font-primary">35</p>
                  <p>文章</p>
                </Card>
              </Col>
              <Col>
                <Card bordered={false}>
                  <p className="font-primary">10</p>
                  <p>目录</p>
                </Card>
              </Col>
              <Col>
                <Card bordered={false}>
                  <p>18</p>
                  <p>标签</p>
                </Card>
              </Col>
            </Row>
            <Card title="最近文章"></Card>
            <Card title="标签"></Card>
          </Space>
        </Sider>
      </Affix>
    </>
  );
};

export default BlogSider;
