import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

import './styles.css';

export default function App() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}

