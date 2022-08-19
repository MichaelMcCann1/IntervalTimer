import WorkoutSetup from "./routes/WorkoutSetup";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <WorkoutSetup />
    </RecoilRoot>
  );
}

export default App;
