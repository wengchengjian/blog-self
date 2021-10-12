import React from 'react';
import { Row, Col, Layout, Menu, List, Card, Space, Divider } from 'antd';
import {
  MessageOutlined,
  TagOutlined,
  LikeOutlined,
  StarOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import styles from './index.module.less';
import { observer } from 'mobx-react';

const { Content } = Layout;
type ContentProps = {
  children: React.ReactNode;
};

const BlogContent = observer(({ children }: ContentProps) => {
  return (
    <>
      <Content>
        <div className={styles['content-box']}>{children}</div>
      </Content>
    </>
  );
});

export default BlogContent;
