import { User } from "@/types/common/user";
export interface RootObject extends User {
  password: string
  phone?:string;
}