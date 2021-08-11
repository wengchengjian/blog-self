import { createStore, combineReducers, applyMiddleware } from "redux";
import ArticlReducer from "./reducers/ArticleReducer";
import TimelineReducer from "./reducers/TimeLineReducer";
import thunk from "redux-thunk";
import TimeLineReducer from "./reducers/TimeLineReducer";
import LoginReducer from "./reducers/LoginReducer";
const rootReducer = combineReducers({
  artile: ArticlReducer,
  timeLines: TimeLineReducer,
  login: LoginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
