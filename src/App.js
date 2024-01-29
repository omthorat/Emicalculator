import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes }  
    from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <><Router>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/"
          element={<LandingPage/>}/>
          </Routes>
    </Router>
    </>
  );
}

export default App;
