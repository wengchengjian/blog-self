import { RootObject as PostApiRequestCommentQuery } from "@/types/request/POST/comment/list-all"
import { RootObject as PostApiRequestCommentStar } from "@/types/request/POST/comment/star";
import { RootObject as PostApiRequestCommentUnStar } from "@/types/request/POST/comment/unstar";
import { RootObject as PostApiRequestCommentAdd } from "@/types/request/POST/comment/addComment";
import { RootObject as GetApiRequestUserQuery } from "@/types/request/GET/user/query";
import { RootObject as GetApiRequestUserStarQuery } from "@/types/request/GET/user/star-query";
import { RootObject as PostApiRequestArticlePublish } from "@/types/request/POST/article/publish"
import { RootObject as GetApiRequestArticleQuery } from "@/types/request/GET/article/query";
import { RootObject as GetApiRequestArticleSearch } from "@/types/request/GET/article/search";
import { RootObject as GetApiRequestArticleRecent } from "@/types/request/GET/article/recent";
import { RootObject as GetApiRequestArticleList } from "@/types/request/GET/article/getArticles";
import { RootObject as GetApiRequestArticleDelete } from "@/types/request/GET/article/delete";
import { RootObject as GetApiRequestArticleStar } from "@/types/request/GET/article/star";
import { RootObject as GetApiRequestArticleUnStar } from "@/types/request/GET/article/unstar";
import { RootObject as GetApiRequestArticleLike } from "@/types/request/GET/article/like";
import { RootObject as GetApiRequestArticleUnLike } from "@/types/request/GET/article/unlike";

import { RootObject as GetApiRequestTagDelete } from "@/types/request/GET/tag/delete";
import { RootObject as GetApiRequestTagDeleteByName } from "@/types/request/GET/tag/deleteByName";
import { RootObject as GetApiRequestTagListAll } from "@/types/request/GET/tag/list-all";
import { RootObject as GetApiRequestTagName } from "@/types/request/GET/tag/name";
import { RootObject as GetApiRequestTagQuery } from "@/types/request/GET/tag/query";

import { RootObject as PostApiRequestTagCreate } from "@/types/request/POST/tag/create";
import { RootObject as PostApiRequestTagUpdate } from "@/types/request/POST/tag/update";

import { RootObject as PostApiRequestUserRegister } from "@/types/request/POST/user/register";
import { RootObject as PostApiRequestUserUpdate } from "@/types/request/POST/user/update";
import { RootObject as GetApiRequestUserFindAll } from "@/types/request/GET/user/findAll";
import { RootObject as GetApiRequestUserDelete } from "@/types/request/GET/user/delete";
import { RootObject as GetApiRequestUserIsLogin } from "@/types/request/GET/user/isLogin";
import { RootObject as GetApiRequestUserLogout } from "@/types/request/GET/user/logout";
import { RootObject as PostApiRequestUserLogin } from "@/types/request/POST/user/login";

import { RootObject as GetApiRequestCategoryQuery } from "@/types/request/GET/category/query";




export interface IGetRequestRoutes {
  '/article/search': GetApiRequestArticleSearch,
  '/article/recent': GetApiRequestArticleRecent,
  '/article/getArticles': GetApiRequestArticleList,
  '/article/delete': GetApiRequestArticleDelete,
  '/article/query': GetApiRequestArticleQuery,
  '/article/star': GetApiRequestArticleStar,
  '/article/unstar': GetApiRequestArticleUnStar,
  '/article/unlike': GetApiRequestArticleUnLike
  '/article/like': GetApiRequestArticleLike
  '/tag/list-all': GetApiRequestTagListAll,
  '/tag/query': GetApiRequestTagQuery,
  '/tag/name': GetApiRequestTagName,
  '/tag/delete': GetApiRequestTagDelete,
  '/tag/delete/name': GetApiRequestTagDeleteByName,
  '/user/findAll': GetApiRequestUserFindAll,
  '/user/delete': GetApiRequestUserDelete,
  '/user/find': GetApiRequestUserQuery,
  '/user/isLogin': GetApiRequestUserIsLogin,
  "/user/star-list": GetApiRequestUserStarQuery,
  '/logout': GetApiRequestUserLogout
  '/category/name': GetApiRequestCategoryQuery
}

export interface IPostRequestRoutes {
  '/comment/list-all': PostApiRequestCommentQuery,
  '/comment/star': PostApiRequestCommentStar,
  '/comment/unStar': PostApiRequestCommentUnStar,
  '/comment/addComment': PostApiRequestCommentAdd,
  '/article/publish': PostApiRequestArticlePublish,
  '/tag/create': PostApiRequestTagCreate,
  '/tag/update': PostApiRequestTagUpdate,
  "/user/register": PostApiRequestUserRegister,
  "/user/update": PostApiRequestUserUpdate,
  "/login": PostApiRequestUserLogin
}