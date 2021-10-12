import { buildPostApi } from "@/utils/buildApiPath/buildPostApi";
import { buildGetApi } from "@/utils/buildApiPath/buildGetApi";

export const getTagList = buildGetApi("/tag/list-all");
export const queryTagByName = buildGetApi("/tag/name");
