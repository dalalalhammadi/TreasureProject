import axios from "axios";
import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

class treasureStore {
treasures = [];


constructor() {
    makeObservable(this, {
      treasures: observable,
      fetchTreasure: action,
    })
  }



fetchTreasure = () => {
    try{
  const response = await instance.get("treasure")
  this.treasures = response.data;
    } catch (error) {
        console.error("TreasureStore -> fetchTreasure -> error", error);
    }
  };

}






  const treasureStore = new TreasureStore();
treasureStore.fetchTreasure();

export default treasureStore;