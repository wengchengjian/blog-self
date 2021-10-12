import { useState } from 'react';
import { Row, Col, Layout, Tabs, Input, Button, Affix, Divider } from 'antd';

import {
  SearchOutlined,
  HomeOutlined,
  EditOutlined,
  BarsOutlined,
  DashOutlined,
  FundViewOutlined,
  ThunderboltTwoTone,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import styles from './index.module.less';
import { RootObject as article } from '@/types/request/POST/article/publish';
import { useStores } from '../../hooks/useStore';
import { observer } from 'mobx-react';
import { logout } from '@/api/v1/common/user/index';
import { searchArticles } from '@/api/v1/common/article/index';

const { Header } = Layout;
const { TabPane } = Tabs;

const BlogHeader = observer(() => {
  const { userStore, articleStore } = useStores();

  const history = useHistory();

  const [inputValue, setValue] = useState<string>('');

  const handleLogin = () => {
    userStore.setLoginBtnVisible(true);
  };
  const handleRegister = () => {
    userStore.setRegisterBtnVisible(true);
  };
  const handleLogout = async () => {
    await logout({});
    userStore.Logout();
  };
  const selfCenter = () => {
    history.push('/center');
  };
  const handleClickEnter = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      Search_Article();
      setValue('');
    }
  };
  const Search_Article = async () => {
    const result = await searchArticles({ condition: inputValue });
    articleStore.setCurrentArticles = result;
  };

  const handleChangeValue = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Affix offsetTop={0}>
        <Header className={styles['header']}>
          <Row justify="start" gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}>
              <Link to="/index">
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
                onKeyUp={(e) => handleClickEnter(e)}
                value={inputValue}
                onChange={(e) => handleChangeValue(e)}
              />
            </Col>
            <Col
              xs={0}
              sm={{ span: 6, push: 4 }}
              md={{ span: 8, push: 4 }}
              lg={{ span: 12, push: 4 }}
              xl={{ span: 12, push: 4 }}
              xxl={{ span: 16, push: 4 }}
            >
              <Tabs defaultActiveKey="1" size="large" animated={true}>
                <TabPane
                  tab={
                    <span className={styles['tab_item']}>
                      <Link to="/index">
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
                    <span className={styles['tab_item']}>
                      <Link to="/index/archives">
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
                    <span className={styles['tab_item']}>
                      <Link to="/index/catalogue">
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
                    <span className={styles['tab_item']}>
                      <Link to="/index/dashboard">
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
                      <Link to="/index/about">
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
            {userStore.token === '' ? (
              <>
                <Col xs={0} sm={0} md={0} lg={0} xl={1} xxl={1}>
                  <Button
                    type="primary"
                    ghost={true}
                    onClick={() => handleLogin()}
                  >
                    登陆
                  </Button>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={1} xxl={1}>
                  <Button danger={true} onClick={() => handleRegister()}>
                    注册
                  </Button>
                </Col>
              </>
            ) : (
              <>
                <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}>
                  <Button
                    type="primary"
                    ghost={true}
                    onClick={() => selfCenter()}
                  >
                    创作中心
                  </Button>
                </Col>
                <Col xs={0} sm={0} md={0} lg={1} xl={1} xxl={1}>
                  <Button danger={true} onClick={() => handleLogout()}>
                    退出登陆
                  </Button>
                </Col>
              </>
            )}
          </Row>
        </Header>
      </Affix>
    </>
  );
});

export default BlogHeader;
