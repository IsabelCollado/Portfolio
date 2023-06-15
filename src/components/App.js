import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Proyects from './Proyects';
import '../styles/App.scss';

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
