const url = "/getArticleList";

const REFRESH = "REFRESH";
const CONTAIN = "CONTAIN";

type article = {
  artileId: number;
  title: string;
  head_title: string;
  outline: string;
  labels: string[];
};
const initialState: article[] = [];

const ArticleActionCreator = (type: string, artiles: article[]) => {
  return {
    type: type,
    payload: artiles,
  };
};
type ArticleAction = {
  type: string;
  payload: article[];
};

export { REFRESH, CONTAIN, initialState, url, ArticleActionCreator };
export type { article, ArticleAction };
