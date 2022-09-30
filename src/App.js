// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title_name = "TextUtils"/>
    <TextForm heading = "Enter your Text to Analyze"/>
    {/* <About /> */}
    </>
  );
}

export default App;
