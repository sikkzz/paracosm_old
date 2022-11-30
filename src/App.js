import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import PhasePage from "./pages/PhasePage";
// import World from "./components/World";
// import Main2 from './components/Main2'



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/phase" element={<PhasePage />} />
        <Route exact path="/test" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
