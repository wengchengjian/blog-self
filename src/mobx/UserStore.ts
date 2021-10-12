import { likeArticle, starArticle } from './../api/v1/common/article/index';
import { makeAutoObservable, autorun, runInAction } from "mobx";
import net from "@/utils/net";
import { User } from "@/types/common/user"
import { Star } from "@/types/common/star";
import { findCurrentUser, isLogin, getStarList } from '@/api/v1/common/user';

const defaultUser = {
  id: "1",
  username: "w473991883",
  nickname: "Weng ChengJian",
  gender: "男",
  email: "473991883@qq.com",
  personalBrief: "这个世界存在你会变得更加美好",
  avatarImgUrl: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  birthday: "2021-09-15"
}


class UserStore {
  isLogin() {
    return this.token && this.token !== '';
  }


  token: String = "";
  user: User = defaultUser;
  loginBtnVisible: boolean = false;
  registerBtnVisible: boolean = false;
  starList: Star[] = []

  async init() {
    //获取登陆信息;
    this.initLoginStatus();
    //获取当前登陆对象
    const currentUser = await findCurrentUser({});
    if (currentUser) {
      runInAction(() => {
        this.user = currentUser;
      })
      this.getUserStarList();
    }

    console.log("current", currentUser);
  }
  constructor() {
    makeAutoObservable(this);
  }

  async getUserStarList() {
    const res = await getStarList({});
    runInAction(() => {
      this.starList = res;
    })
  }
  get likedArticles() {
    const res: string[] = [];

    this.starList.forEach((item) => {
      if (item.articleId && item.status === 1) {
        res.push(item.articleId);
      }
    })

    return res;
  }

  get dislikedArticles() {
    const res: string[] = [];

    this.starList.forEach((item) => {
      if (item.articleId && item.status === -1) {
        res.push(item.articleId);
      }
    })

    return res;
  }
  get unlikedComments() {
    const res: string[] = [];

    this.starList.forEach((item) => {
      if (item.commentId && item.status === -1) {
        res.push(item.commentId);
      }
    })

    return res;
  }

  get likedComments() {
    const res: string[] = [];

    this.starList.forEach((item) => {
      if (item.commentId && item.status === 1) {
        res.push(item.commentId);
      }
    })

    return res;
  }
  get starArticle() {
    const res: string[] = [];

    this.starList.forEach((item) => {
      if (item.articleId && item.status === 0) {
        res.push(item.articleId);
      }
    })

    return res;
  }
  setLoginBtnVisible(value: boolean) {
    this.loginBtnVisible = value;
  }

  setRegisterBtnVisible(value: boolean) {
    this.registerBtnVisible = value;
  }

  setUser(value: User) {
    this.user = value;
  }
  setStarList(value: Star[]) {
    this.starList = value;
  }

  Login(value: String) {

    this.token = value;
    net.setAuth(`Bearer ${value}`);
    localStorage.setItem('blogSelfToken', `Bearer ${value}`);

  }

  initLoginStatus() {
    //初始化登陆状态
    const token = localStorage.getItem("blogSelfToken");
    const bear = "Bearer ";
    //如果存在token假设用户已经登陆
    if (token && token.length != 0) {
      const auth = token.substring(bear.length);
      this.Login(auth);
    }
  }
  Logout() {
    this.token = "";
    this.user = defaultUser;
    net.setAuth('');
    localStorage.removeItem('blogSelfToken');
  }
  likeArticle(articleId: string) {
    return this.likedArticles.includes(articleId);
  }
  dislikeArticles(articleId: string) {
    return this.dislikedArticles.includes(articleId);
  }
  likeComment(commentId: string) {
    return this.likedComments.includes(commentId);
  }
  unlikeComment(commentId: string) {
    return this.unlikedComments.includes(commentId);
  }
  StarArticle(articleId: string) {
    return this.starArticle.includes(articleId);
  }
}



const userStore = new UserStore();




export default userStore;