import { Category } from "@/types/common/category";
import { Tag } from "@/types/common/tag";
export interface RootObject {
  articleTitle: string;
  articleContent: string;
  articleType: string;
  articleTags: Tag[]
  articleCategories: string;
  articleUrl?: string;
  articleTabloid: string;
}