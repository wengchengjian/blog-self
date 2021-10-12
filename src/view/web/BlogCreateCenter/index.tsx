import { Layout, Row, Col } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { observer } from 'mobx-react';
import CenterContent from './Content';
import styles from './index.module.less';
import CenterSider from './Sider';
const BlogCreateCenter = observer(() => {
  return (
    <>
      <div className={styles['center-box']}>
        <Row justify="center">
          <CenterSider />
          <CenterContent />
        </Row>
      </div>
    </>
  );
});

export default BlogCreateCenter;
