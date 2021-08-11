import { connect } from "react-redux";
import { Dispatch } from "redux";
import { article, REFRESH, ArticleActionCreator } from "../types/Article";

import BlogIndex from "../view/web/BlogIndex";
const mapStateToProps = ({ artile }: { artile: article[] }) => {
  return {
    articles: [...artile],
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ArticleRefresh: (data: article[]) =>
      dispatch(ArticleActionCreator(REFRESH, data)),
  };
};

const BlogIndexCon = connect(mapStateToProps, mapDispatchToProps)(BlogIndex);

export default BlogIndexCon;
