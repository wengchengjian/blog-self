import { Switch, Route } from 'react-router';
import ContentData from './ContentData';
import Followers from './Followers';

const DataCenter = () => {
  return (
    <>
      <Switch>
        <Route path="/center/DataCenter/contentData" component={ContentData} />
        <Route path="/center/DataCenter/followers" component={Followers} />
      </Switch>
    </>
  );
};

export default DataCenter;
