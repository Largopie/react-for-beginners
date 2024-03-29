import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import GlobalStyles from './globalStyles';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
  </Router>
  );
}

export default App;