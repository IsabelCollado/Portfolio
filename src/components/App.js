import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Proyects from './Proyects';
import '../styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Proyects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
