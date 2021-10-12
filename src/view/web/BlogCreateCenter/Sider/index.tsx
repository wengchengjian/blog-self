import { useState } from 'react';
import { Menu, Col, Affix, Button } from 'antd';
import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import styles from './index.module.less';
import { useHistory } from 'react-router';
import Sider from 'antd/lib/layout/Sider';
import { useStores } from '@/hooks/useStore';
const { SubMenu, Item } = Menu;
const CenterSider = () => {
  const { userStore } = useStores();
  const history = useHistory();
  const [openKeys, setOpenKeys] = useState<React.Key[]>(['sub1']);
  const rootMenyKeys: React.Key[] = ['sub1', 'sub2', 'sub3', 'sub4'];
  const handleOpenChange = (keys: React.Key[]) => {
    console.log('keys', keys);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if(latestOpenKey==='home'){
      history.push("/center");
      return;
    }


    if (latestOpenKey) {
      if (rootMenyKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys([latestOpenKey]);
      }
    } else {
      setOpenKeys([]);
    }
  };
  const handleClickWrite = () => {
    history.push('/write');
  };
  const handleMenuClick = (info: any) => {
    const { key } = info;
    switch (key) {
      case 'article':
        history.push('/center/contentManage/article');
        break;
      case 'special':
        history.push('/center/contentManage/special');
        break;
      case 'boiling':
        history.push('/center/contentManage/boilingPoint');
        break;
      case 'contentData':
        history.push('/center/DataCenter/contentData');
        break;
      case 'follower':
        history.push('/center/DataCenter/followers');
        break;
      case 'common':
        history.push('/center/question/common');
        break;
    }
  };
  return (
    <>
      <Col className={styles['sider-box']} span={3}>
        <Affix offsetTop={90}>
          <div className={styles['usr-box']}>
            <div>
              <span className={styles['user-img-box']}>
                <img
                  alt={userStore.user.nickname}
                  src={userStore.user.avatarImgUrl}
                  width={48}
                  height={48}
                />
              </span>
              <span className={styles['username']}>
                {userStore.user.nickname}
              </span>
            </div>
            <div className={styles['write-btn-box']}>
              <Button type="primary" block onClick={handleClickWrite}>
                写文章
              </Button>
            </div>
          </div>
          <div className={styles['menu-box']}>
            <Menu
              mode="inline"
              openKeys={openKeys as string[]}
              onOpenChange={handleOpenChange}
              onClick={handleMenuClick}
            >
              <SubMenu
                key="home"
                icon={<HomeOutlined />}
                title="首页"
              ></SubMenu>
              <SubMenu key="content" icon={<ReadOutlined />} title="内容管理">
                <Item key="article">文章管理</Item>
                <Item key="special">专栏管理</Item>
                <Item key="boiling">沸点管理</Item>
              </SubMenu>
              <SubMenu
                key="data"
                icon={<FundProjectionScreenOutlined />}
                title="数据中心"
              >
                <Item key="contentData">内容数据</Item>
                <Item key="follower">关注者数据</Item>
              </SubMenu>
              <SubMenu
                key="question"
                icon={<QuestionCircleOutlined />}
                title="帮助中心"
              >
                <Item key="common">常见问题</Item>
              </SubMenu>
            </Menu>
          </div>
        </Affix>
      </Col>
    </>
  );
};

export default CenterSider;
