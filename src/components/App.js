import { Route, Routes } from 'react-router-dom';
import Landing from './landing';
import Header from './header';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Footer from './footer';
import '../styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
