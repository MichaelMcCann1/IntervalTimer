import WorkoutSetup from "./routes/WorkoutSetup";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import { RecoilRoot } from "recoil";
import Home from "./routes/Home";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Home />
    </RecoilRoot>
  );
}

export default App;
