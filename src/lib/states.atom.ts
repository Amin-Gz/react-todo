import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const recoilTasks = atom({
  key: "data",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
