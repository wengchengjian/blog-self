import { Route, Switch } from 'react-router';
import ArticleManage from './ArticleManage';
import BoilingPoint from './BoilingPoint';
import SpecialColumn from './SpecialColumn';
import styles from './index.module.less';
const ContentManage = () => {
  return (
    <>
      <Switch>
        <Route path="/center/contentManage/article" component={ArticleManage} />
        <Route
          path="/center/contentManage/boilingPoint"
          component={BoilingPoint}
        />
        <Route path="/center/contentManage/special" component={SpecialColumn} />
      </Switch>
    </>
  );
};

export default ContentManage;
