import { buildPostApi } from "@/utils/buildApiPath/buildPostApi";
import { buildGetApi } from "@/utils/buildApiPath/buildGetApi";

export const findAllUser = buildGetApi("/user/findAll");
export const logout = buildGetApi("/logout");
export const findCurrentUser = buildGetApi("/user/find");
export const deleteUser = buildGetApi("/user/delete");
export const register = buildPostApi("/user/register");
export const updateUser = buildPostApi("/user/update");
export const isLogin = buildGetApi("/user/isLogin");
export const Login = buildPostApi("/login");
export const getStarList = buildGetApi("/user/star-list");