import './App.css';
import './bootstrap.min.css';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Home from './component/Home';
import Nav from './component/Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
