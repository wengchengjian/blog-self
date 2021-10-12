import { buildPostApi } from "@/utils/buildApiPath/buildPostApi";

export const getCommentList = buildPostApi("/comment/list-all")