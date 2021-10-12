import { makeAutoObservable, runInAction } from "mobx";
import { Tag } from "@/types/common/tag";
import { getTagList } from '@/api/v1/common/tag';

class TagStore {


  tags: Tag[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  async init() {
    await this.getTagList();
  }

  async getTagList() {
    const result = await getTagList({});
    runInAction(() => {
      this.setTags = result;
    })
  }
  get Tags() {
    return this.tags;
  }



  set setTags(values: Tag[]) {
    this.tags = values;
  }

}

const tagStore = new TagStore();

export default tagStore;