import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CityList from "./pages/CityList";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/home">首页</Link>
        <Link to="/citylist">城市x</Link>
        <Routes>
          <Route path="/home/*" element = {<Home />}></Route>
          <Route path="/citylist" element = {<CityList />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
