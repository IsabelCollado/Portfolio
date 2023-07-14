import { Route, Routes } from 'react-router-dom';
import Landing from './landing';
import Header from './header';
import About from './about';
import Contact from './contact';
import Projects from './projects';
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
