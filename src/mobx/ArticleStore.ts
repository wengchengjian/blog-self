import { makeAutoObservable, runInAction } from "mobx";
import { Article } from "@/types/common/article";
import { recentArticles, searchArticles, getArticles } from '@/api/v1/common/article';



class ArticleStore {


  articles: Article[] = [];
  currentArticles: Article[] = [];
  recentArticles: Article[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    await this.getRecentArticle();
    await this.queryArticleList();
  }

  async getRecentArticle() {
    const result = await recentArticles({});
    runInAction(() => {
      articleStore.setRecenttArticles = result;
    })
  };

  async queryArticleList() {
    const res = await getArticles({});
    this.setCurrentArticles = res;
    this.setArticles = res;
  };
  get Articles() {
    return this.articles;
  }
  get RecentArticles() {
    return this.recentArticles;
  }
  get CurrentArticles() {
    return this.currentArticles;
  }

  set setRecenttArticles(values: Article[]) {
    this.recentArticles = values;
  }

  set setArticles(articles: Article[]) {
    this.articles = articles;
  }
  set setCurrentArticles(articles: Article[]) {
    this.currentArticles = articles;
  }
}

const articleStore = new ArticleStore();

export default articleStore;