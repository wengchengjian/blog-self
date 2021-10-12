import React from "react";
import articleStore from "./ArticleStore";
import tagStore from "./TagStore"
import userStore from "./UserStore";


export const storesContext = React.createContext({ articleStore, tagStore, userStore });