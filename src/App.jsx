import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home1/Home1';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
