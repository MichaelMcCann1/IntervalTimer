import WorkoutSetup from "./routes/WorkoutSetup";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout-options" element={<WorkoutSetup />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
