import { User } from "@/types/common/user";
export interface RootObject {
  nickname?:string;
  gender?:string;
  personalBrief?:string;
  email?:string;
  avatarImgUrl?:string;
  password?: string
  phone?:string;
  trueName?:string;
  birthday?:string;
}