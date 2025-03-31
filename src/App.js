import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import References from './components/References/References';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>   
      <Education></Education>
      <Projects></Projects>
      <Experience></Experience>
      <References></References>
      <Contact></Contact>
      {/* <Capabilities></Capabilities> */}
    </div>
  );
}

export default App;
