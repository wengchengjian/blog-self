import { Switch, Route } from 'react-router';
import CommonQuestion from './CommonQuestion';
const QuestionCenter = () => {
  return (
    <>
      <Switch>
        <Route path="/center/question/common" component={CommonQuestion} />
      </Switch>
    </>
  );
};

export default QuestionCenter;
