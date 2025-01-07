import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
// import Capabilities from './components/Capabilities/Capabilities';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>   
      <Projects></Projects>
      <Education></Education>
      <Experience></Experience>
      {/* <Capabilities></Capabilities> */}
    </div>
  );
}

export default App;
