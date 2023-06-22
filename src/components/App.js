import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
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
    </div>
  );
};

export default App;
