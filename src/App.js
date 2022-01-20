import './App.css';
import About from './components/About';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </main>
  );
}

export default App;
