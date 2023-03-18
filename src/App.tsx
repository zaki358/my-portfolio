import { BrowserRouter } from "react-router-dom";
import { HomeSwitchProvider } from "./providers/HomeSwitchProvider";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <HomeSwitchProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HomeSwitchProvider>
  );
};