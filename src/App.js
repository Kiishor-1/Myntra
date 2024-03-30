import Navbar from './components/common/Navbar';
import './App.css';
import Home from './Pages/Home';
import {  Routes, Route } from 'react-router-dom';
import PageNotFound from './components/common/PageNotFound';
import Login from './Pages/Login';
import VerifyEmail from './Pages/VerifyEmail';
function App() {
  return (
    // <BrowserRouter>
      <div className="App relative">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verifyEmail' element={<VerifyEmail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;
