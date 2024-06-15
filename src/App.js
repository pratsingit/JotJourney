import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Header.css';
import video from './pages/video.mp4';

const VideoBackground = () => {
  return <video autoPlay loop muted playsInline className="background-video" src={video} />;
};

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="d-flex flex-column min-vh-100">
      {isHome && <VideoBackground />}
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
