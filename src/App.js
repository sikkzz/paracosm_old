import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import Loading from "./pages/Loading";
import PhasePage from "./pages/PhasePage";
// import World from "./components/World";
// import Main2 from './components/Main2'



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Loading />} />
        {/* <Route exact path="/loading" element={<Loading />} /> */}
        <Route exact path="/phase" element={<PhasePage />} />
        <Route exact path="/abcd_secret_1234" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
