import { Row, Col, Layout, Tabs, Input, Button, Affix, Divider } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  EditOutlined,
  BarsOutlined,
  DashOutlined,
  FundViewOutlined,
  ThunderboltTwoTone,
} from "@ant-design/icons";
import { LoginActionCreator, REGISTER } from "../types/Login";
import store from "../redux/store";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../static/sass/components/header.scss";

const { Header } = Layout;
const { TabPane } = Tabs;
const BlogHeader = () => {
  const handleLogin = () => {
    store.dispatch(LoginActionCreator(REGISTER));
  };
  return (
    <>
      <Affix offsetTop={0}>
        <Header className="header">
          <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
              <Link to="/">
                <div>
                  <ThunderboltTwoTone />
                  <span>Logo</span>
                </div>
              </Link>
            </Col>
            <Col xs={0} sm={1} md={2} lg={3} xl={3} xxl={3}>
              <Input
                bordered={false}
                prefix={<SearchOutlined />}
                placeholder="搜索文章"
              />
            </Col>
            <Col
              xs={0}
              sm={{ span: 6, push: 4 }}
              md={{ span: 8, push: 4 }}
              lg={{ span: 12, push: 2 }}
              xl={{ span: 12, push: 4 }}
              xxl={{ span: 16, push: 8 }}
            >
              <Tabs defaultActiveKey="1" size="large" animated={true}>
                <TabPane
                  tab={
                    <span className="tab_item">
                      <Link to="/">
                        <div>
                          <HomeOutlined />
                          <span>首页</span>
                        </div>
                      </Link>
                    </span>
                  }
                  key="1"
                ></TabPane>
                <TabPane
                  tab={
                    <span className="tab_item">
                      <Link to="/archives">
                        <div>
                          <EditOutlined />
                          <span>归档</span>
                        </div>
                      </Link>
                    </span>
                  }
                  key="2"
                ></TabPane>
                <TabPane
                  tab={
                    <span className="tab_item">
                      <Link to="/catalogue">
                        <div>
                          <BarsOutlined />
                          <span>目录</span>
                        </div>
                      </Link>
                    </span>
                  }
                  key="3"
                ></TabPane>
                <TabPane
                  tab={
                    <span className="tab_item">
                      <Link to="/dashboard">
                        <div>
                          <FundViewOutlined />
                          <span>统计</span>
                        </div>
                      </Link>
                    </span>
                  }
                  key="4"
                ></TabPane>
                <TabPane
                  tab={
                    <span className="tab_item">
                      <Link to="/about">
                        <div>
                          <DashOutlined />
                          <span>关于</span>
                        </div>
                      </Link>
                    </span>
                  }
                  key="5"
                ></TabPane>
              </Tabs>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={1} xxl={1}>
              <Button type="primary" ghost={true}>
                登陆
              </Button>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={1} xxl={1}>
              <Button danger={true} onClick={() => handleLogin()}>
                注册
              </Button>
            </Col>
          </Row>
        </Header>
      </Affix>
    </>
  );
};

export default BlogHeader;
