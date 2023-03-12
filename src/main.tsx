import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./style.scss";
//初回読み込みのところでgsapを使うとStrictModeの影響でgsapが上手く処理されないのでコメントアウト
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
