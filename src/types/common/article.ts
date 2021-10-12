import { Tag } from "./tag";
export interface Article {
  articleId: string
  author: string;
  articleTitle: string;
  articleContent: string;
  articleType: string;
  articleTags: Tag[]
  articleCategories: string;
  articleUrl?: string;
  articleTabloid: string;
  likes: string;
  star: string;
  unlikes: string;
  lastArticleId: string;
  nextArticleId: string;
  createTime: string;
  updateTime: string;
}