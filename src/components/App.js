import { Route, Routes } from 'react-router-dom';
import Header from './header';
import Landing from './landing';
import About from './about';
import Contact from './Contact';
import Projects from './Projects';
import projectCardData from '../data/projects.json';
import Footer from './footer';
import '../styles/App.scss';

const App = () => {
  return (
    <div className="container">
      <Header />

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutMe" element={<About />} />
          <Route
            path="/projects"
            element={<Projects projectCardData={projectCardData} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
