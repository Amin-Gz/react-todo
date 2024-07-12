import { useRecoilState } from "recoil";
import { recoilTasks } from "../../lib/states.atom";
import data from "./../../assets/db/data";
import TaskMolecule from "../molecules/Mole-task";
import { MouseEventHandler, useEffect } from "react";

function TodoBox() {
  const [rdata, setRdata] = useRecoilState(recoilTasks);
  useEffect(() => {
    let tasks = data;
    setRdata(tasks);
  }, []);

  const addTaskBtn: MouseEventHandler<HTMLDivElement> = () => {
    const task = prompt("enter your task");
    let newTask = {};
    if (task) {
      newTask = {
        id: rdata.length + 1,
        task,
        stage: 1,
      };
    }
    setRdata((rdata: any) => [...rdata, newTask]);
  };

  return (
    <div className=" rounded-lg  shadow-lg bg-[#DDE6ED] border border-task">
      <table className=" h-[600px] ">
        <thead>
          <tr className="border-b border-task *:py-4">
            <th className="border-r border-task">Tasks </th>
            <th>In progress</th>
            <th className="border-l border-task">Done</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:w-[280px]">
            <td className=" border-r border-task">
              <div className=" w-full h-full gap-5 overflow-scroll">
                {rdata
                  .filter((item: { stage: number }) => item.stage === 1)
                  .map((item: { task: string }) => (
                    <TaskMolecule task={item.task}></TaskMolecule>
                  ))}
                <div onClick={addTaskBtn}>
                  <TaskMolecule task={"add task +"} />
                </div>
              </div>
            </td>
            <td>
              <div className=" w-full h-full gap-5 overflow-scroll">
                {rdata
                  .filter((item: { stage: number }) => item.stage === 2)
                  .map((item: { task: string }) => (
                    <TaskMolecule task={item.task}></TaskMolecule>
                  ))}
              </div>
            </td>
            <td className="border-l border-task">
              <div className=" w-full h-full gap-5 overflow-scroll">
                {rdata
                  .filter((item: { stage: number }) => item.stage === 3)
                  .map((item: { task: string }) => (
                    <TaskMolecule task={item.task}></TaskMolecule>
                  ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoBox;
// {task
//   .filter((item) => item.stage === 1)
//   .map((item) => (
//     <li key={item.id}>{item.task}</li>
//   ))}
