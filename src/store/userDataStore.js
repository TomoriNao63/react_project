import { makeAutoObservable } from "mobx";

class AppStore {
  //1.定义数据
  state = {
    auth: {
      uid: "",
      isLogined: true,
    },

    whiteList: {},
  };

  constructor() {
    //2.把数据弄成响应式
    makeAutoObservable(this);
  }
}
const useAppSelector = new AppStore();
export default useAppSelector;
