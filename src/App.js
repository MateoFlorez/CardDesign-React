import SideMenu from "./components/SideMenu";
import InfoCard from "./components/InfoCard";
import RightSide from "./components/RightSide";
import OrangeBox from "./components/OrangeBox";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-full overflow-hidden flex justify-center box-border bg-zinc-300">
      <OrangeBox />
      <SideMenu />
      <Routes>
        <Route
          path="/billing"
          element={
            <div className="w-3/5 flex z-20">
              <InfoCard /> <RightSide />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
