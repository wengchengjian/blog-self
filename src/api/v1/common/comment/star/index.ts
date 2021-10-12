import { buildGetApi } from "@/utils/buildApiPath/buildGetApi";
import { buildPostApi } from "@/utils/buildApiPath/buildPostApi";

export const starComment = buildPostApi("/comment/star");