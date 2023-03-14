// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Article2 from './components/Article2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/> 
     <Nav/>
     <Article/>
     <Article2/>
     <Footer/>
    </div>
  );
}

export default App;
