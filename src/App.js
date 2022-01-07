import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";


function App() {
    return <Router>
      <Routes>
        <Route path="${process.env.PUBLIC_URL/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>;   
};

export default App;