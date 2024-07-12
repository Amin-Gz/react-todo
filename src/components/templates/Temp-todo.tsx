import TodoBox from "../organisms/Organ-todo";
import Header from "../organisms/Organ-header";
import Footer from "../organisms/Organ-footer";

function TodoTemplate() {
  return (
    <div className="flex flex-col justify-between h-full items-center bg-gradient-to-br from-[#f2fcfe] from-40% to-[#1c92d2]  ">
      <Header />
      <TodoBox />
      <Footer />
    </div>
  );
}

export default TodoTemplate;
