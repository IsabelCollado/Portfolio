import { Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Landing from './Landing.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Footer from './footer.js';
import '../styles/App.scss';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
