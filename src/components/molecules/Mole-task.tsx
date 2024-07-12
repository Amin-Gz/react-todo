import { useRecoilState } from "recoil";
import { recoilTasks } from "../../lib/states.atom";

function TaskMolecule(data: any) {
  const [rdata, setRdata] = useRecoilState(recoilTasks);
  let style = "";
  const deleteBtn = () => {
    const newTaskList = rdata.filter((item: any) => {
      return item.task !== data.task;
    });
    setRdata(newTaskList);
  };
  return (
    <div
      className={`w-5/6 bg-[#9DB2BF] rounded-md my-6 mx-auto hover:cursor-pointer hover:bg-[#aedcff] p-4 active:bg-[#90b7d5] ${style}`}
      onClick={deleteBtn}
      draggable={true}
    >
      <p>{data.task}</p>
    </div>
  );
}

export default TaskMolecule;
