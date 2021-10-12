import React, { useContext } from "react";
import { storesContext } from "../mobx/store";


export const useStores = () => useContext(storesContext);

