import { Route, Routes } from 'react-router-dom';
import Header from './header';
import Landing from './landing';
import About from './about';
import Contact from './contact';
import Projects from './Projects';
import Footer from './footer';
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
