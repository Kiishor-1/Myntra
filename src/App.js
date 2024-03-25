import Navbar from './components/common/Navbar';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/common/PageNotFound';
function App() {
  return (
    <BrowserRouter>
      <div className="App relative">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
