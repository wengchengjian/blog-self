import { User } from "@/types/common/user"



export interface CommentItem {
  id: string;
  replyTo?: User;
  articleId?: string;
  children?: CommentItem[];
  parentCid?: string;
  user: User;
  content: string;
  createTime: string;
  updateTime: string;
  likes: number;
  unlikes: number;
}

// export interface CommentSubItem {
//   id: number;
//   user: User;
//   content: string;
//   replyTo: User;
//   createTime: string;
//   updateTime: string;
//   like: number;
//   unlike: number;
// }