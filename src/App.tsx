import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Navbar } from "./components/common/Navbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import Layout from "./components/common/Layout";
import PlayerListPage from "./pages/PlayerListPage";
import PredictionPage from "./pages/PredictionPage";
import ErrorPage from "./pages/ErrorPage";
import NewsPage from "./pages/NewsPage";
import type { MatchDto } from "./types/MatchDto";

function App() {
  const testmatches : MatchDto = {
    id : 0,
    teamA : "A",
    teamB : "B",
    matchDate : Date.now().toString(),
    description : "세기의 대결",
    predictionOpen : true,
    alreadyPredicted : false
  }
  return (
    <div data-theme="dark">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/players" element={<PlayerListPage />} />
              <Route path="/players/0" element={<ProfilePage id={0}/>} />
              <Route path="/players/1" element={<ProfilePage id={1}/>} />
              <Route path="/players/2" element={<ProfilePage id={2}/>} />
              <Route path="/players/3" element={<ProfilePage id={3}/>} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/predictions" element={<PredictionPage matches={[testmatches, testmatches, testmatches]} />} />
              <Route path="/error/:status" element={<ErrorPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
