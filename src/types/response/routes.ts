import { CommentItem as PostApiResponseCommentQuery } from "@/types/response/POST/comment/list-all";
import { RootObject as PostApiResponseCommentStar } from "@/types/response/POST/comment/star";
import { RootObject as PostApiResponseCommentUnStar } from "@/types/response/POST/comment/unstar";
import { RootObject as PostApiResponseCommentAdd } from "@/types/response/POST/comment/addComment";
import { RootObject as GetApiResponseUserQuery } from "@/types/response/GET/user/query";
import { RootObject as GetApiResponseUserStarQuery } from "@/types/response/GET/user/star-query";
import { RootObject as GetApiResponseArticleRecent } from "@/types/response/GET/article/recent";
import { RootObject as GetApiResponseArticleDelete } from "@/types/response/GET/article/delete";
import { RootObject as GetApiResponseArticleListAll } from "@/types/response/GET/article/getArticles";
import { RootObject as GetApiResponseArticleLike } from "@/types/response/GET/article/like";
import { RootObject as GetApiResponseArticleQuery } from "@/types/response/GET/article/query";
import { RootObject as GetApiResponseArticleSearch } from "@/types/response/GET/article/search";
import { RootObject as GetApiResponseArticleStar } from "@/types/response/GET/article/star";
import { RootObject as GetApiResponseArticleUnlike } from "@/types/response/GET/article/unlike";
import { RootObject as GetApiResponseArticleUnStar } from "@/types/response/GET/article/unstar";
import { RootObject as GetApiResponseTagListAll } from "@/types/response/GET/tag/list-all";
import { RootObject as GetApiResponseTagDelete } from "@/types/response/GET/tag/delete";
import { RootObject as GetApiResponseTagDeleteByName } from "@/types/response/GET/tag/deleteByName";
import { RootObject as GetApiResponseTagName } from "@/types/response/GET/tag/name";
import { RootObject as GetApiResponseTagQuery } from "@/types/response/GET/tag/query";


import { RootObject as PostApiResponseArticlePublish } from "@/types/response/POST/article/publish";
import { RootObject as PostApiResponseTagCreate } from "@/types/response/POST/tag/create";
import { RootObject as PostApiResponseTagUpdate } from "@/types/response/POST/tag/update";

import { RootObject as PostApiResponseUserRegister } from "@/types/response/POST/user/register";
import { RootObject as PostApiResponseUserUpdate } from "@/types/response/POST/user/update";

import { RootObject as GetApiResponseUserFindAll } from "@/types/response/GET/user/findAll";
import { RootObject as GetApiResponseUserDelete } from "@/types/response/GET/user/delete";
import { RootObject as GetApiResponseUserIsLogin } from "@/types/response/GET/user/isLogin";
import { RootObject as GetApiResponseUserLogout } from "@/types/response/GET/user/logout";
import { RootObject as PostApiResponseUserLogin } from "@/types/response/POST/user/login";
import { RootObject as GetApiResponseCategoryQuery } from "@/types/response/GET/category/query";



export interface IGetResponseRoutes {
  '/article/recent': GetApiResponseArticleRecent[],
  '/article/search': GetApiResponseArticleSearch[],
  '/article/query': GetApiResponseArticleQuery,
  '/article/getArticles': GetApiResponseArticleListAll[],
  '/article/delete': GetApiResponseArticleDelete,
  '/article/star': GetApiResponseArticleStar,
  '/article/unstar': GetApiResponseArticleUnStar,
  '/article/like': GetApiResponseArticleLike,
  '/article/unlike': GetApiResponseArticleUnlike,
  '/tag/list-all': GetApiResponseTagListAll[],
  '/tag/query': GetApiResponseTagQuery,
  '/tag/name': GetApiResponseTagName,
  '/tag/delete': GetApiResponseTagDelete,
  '/tag/delete/name': GetApiResponseTagDeleteByName,
  "/user/findAll": GetApiResponseUserFindAll[]
  "/user/isLogin": GetApiResponseUserIsLogin
  "/user/star-list": GetApiResponseUserStarQuery[],
  '/user/find': GetApiResponseUserQuery,
  "/user/delete": GetApiResponseUserDelete
  '/logout': GetApiResponseUserLogout
  '/category/name': GetApiResponseCategoryQuery

}

export interface IPostResponseRoutes {
  '/comment/list-all': PostApiResponseCommentQuery[],
  '/comment/star': PostApiResponseCommentStar,
  '/comment/unStar': PostApiResponseCommentUnStar,
  '/comment/addComment': PostApiResponseCommentAdd,
  '/article/publish': PostApiResponseArticlePublish,
  '/tag/create': PostApiResponseTagCreate,
  '/tag/update': PostApiResponseTagUpdate,
  '/user/register': PostApiResponseUserRegister,
  '/user/update': PostApiResponseUserUpdate,
  '/login': PostApiResponseUserLogin
}