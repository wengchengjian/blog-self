import { buildPostApi } from "@/utils/buildApiPath/buildPostApi";
import { buildGetApi } from "@/utils/buildApiPath/buildGetApi";

export const getArticles = buildGetApi("/article/getArticles");
export const searchArticles = buildGetApi('/article/search');
export const recentArticles = buildGetApi('/article/recent');
export const deleteArticle = buildGetApi("/article/delete");
export const queryArticle = buildGetApi("/article/query");
export const starArticle = buildGetApi("/article/star");
export const unStarArticles = buildGetApi("/article/unstar");
export const likeArticle = buildGetApi("/article/like");
export const unLikeArticles = buildGetApi("/article/unlike");
export const publishArticle = buildPostApi("/article/publish");