import ReactDOM from "react-dom/client";
import Rout from "./navigation/Rout.tsx";
import "./assets/css/imports.css";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Rout />
  </RecoilRoot>
);
