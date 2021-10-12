import { Col } from 'antd';
import { Route, Switch } from 'react-router';
import ContentManage from './ContentManage';
import DataCenter from './DataCenter';
import QuestionCenter from './QuestionCenter';
import CenterHome from './CenterHome';
import styles from './index.module.less';
const CenterContent = () => {
  return (
    <>
      <Col span={12} className={styles['content-box']}>
        <Switch>
          <Route path="/center" exact component={CenterHome} />
          <Route path="/center/contentManage" component={ContentManage} />
          <Route path="/center/DataCenter" component={DataCenter} />
          <Route path="/center/question" component={QuestionCenter} />
        </Switch>
      </Col>
    </>
  );
};

export default CenterContent;
