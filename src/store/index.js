import React from "react";
import { useAppSelectorStore } from "./useAppSelector";

//1.声明一个rootStore
class RootStore {
  constructor() {
    //对子模块进行实例化操作
    this.useAppSelectorStore = new useAppSelectorStore();
  }
}
//实例化操作
const rootStore = new RootStore();

//使用react context机制 完成统一方法封装

const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore };
