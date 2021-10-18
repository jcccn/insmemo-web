import { useContext, useEffect } from "react";
import appContext from "./labs/appContext";
import { appRouterSwitch } from "./routers";
import { globalStateService } from "./services";

function App() {
  const {
    locationState: { pathname },
  } = useContext(appContext);

  useEffect(() => {
    const handleWindowResize = () => {
      globalStateService.setIsMobileView(document.body.clientWidth <= 875);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return <>{appRouterSwitch(pathname)}</>;
}

export default App;
