import Navbar from './components/common/Navbar';
import './App.css';
import Footer from './components/common/Footer';
import Carousel from './components/common/Carousel';
function App() {
  return (
    <div className="App relative">
      <Navbar/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
