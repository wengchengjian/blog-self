import {
  ArticleAction,
  CONTAIN,
  REFRESH,
  initialState,
} from "../../types/Article";

const ArticlReducer = (state = initialState, action: ArticleAction) => {
  switch (action.type) {
    case REFRESH:
      return action.payload;
    case CONTAIN:
      return state;
    default:
      return state;
  }
};

export default ArticlReducer;
