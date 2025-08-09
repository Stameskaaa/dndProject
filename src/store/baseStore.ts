import { makeAutoObservable } from 'mobx';

export class BaseStore {
  showLoader = false;

  constructor() {
    makeAutoObservable(this);
  }
  changeVisible(flag: boolean) {
    this.showLoader = flag;
  }
}

export const baseStore = new BaseStore();
