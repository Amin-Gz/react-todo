//todo instead of setting the type here import it from tsFiles.ts in lib
// todo import { data } from "./../../lib/tsFiles";
//  stage 1 is for task
//  stage 2 is for in progress
//  stage 3 is for Done
type data = Array<data2>;
type data2 = {
  id: number;
  task: string | null;
  stage: number |1 | 2 | 3;
};
let data: data = [
  { id: 1, task: `grossery shopping`, stage: 1 },
  { id: 2, task: `call dadd`, stage: 2 },
  { id: 3, task: `finish project`, stage: 2 },
  { id: 4, task: `go on a  hike`, stage: 1 },
  { id: 5, task: `finish the course `, stage: 3 },
  { id: 6, task: `do  the exam your`, stage: 3 },
  { id: 7, task: `call parsa`, stage: 1 },
  { id: 8, task: `call puria`, stage: 2 },
  { id: 9, task: `call ahmad`, stage: 2 },
  { id: 10, task: `pack your bag`, stage: 1 },
  { id: 11, task: `who is alireza`, stage: 3 },
  { id: 12, task: `send it whatever`, stage: 3 },
  { id: 13, task: `pray `, stage: 1 },
  { id: 14, task: `lose waight`, stage: 2 },
  { id: 15, task: `hope for the future `, stage: 2 },
  { id: 16, task: `call  police`, stage: 1 },
  { id: 17, task: `call GZ`, stage: 3 },
  { id: 18, task: `go mall`, stage: 3 },
  { id: 19, task: `clean the house`, stage: 2 },
  { id: 20, task: `use story book`, stage: 1 },
  { id: 21, task: `see the code`, stage: 3 },
  { id: 22, task: `check the boxes`, stage: 3 },
  { id: 23, task: `learn new things`, stage: 1 },
  { id: 24, task: `take angel out`, stage: 2 },
  { id: 25, task: `go to a dentistry`, stage: 2 },
  { id: 26, task: `check your bode health`, stage: 1 },
  { id: 27, task: `read book`, stage: 3 },
  { id: 28, task: `touthbrush`, stage: 3 },
];
export default data;
