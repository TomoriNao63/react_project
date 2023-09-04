import { makeAutoObservable } from "mobx";

class MovieStore {
  //1.定义数据
  MoviesList = [
    {
      cid: "",
      name: "",
      typeID: "",
      typename: "",
      text: null,
      img: "",
      rate: 0,
      director: "",
    },
  ];
  constructor() {
    //2.把数据弄成响应式
    makeAutoObservable(this);
  }
}

export { MovieStore };
