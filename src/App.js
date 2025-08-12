import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/page.css'; // Corrected import path

// Import your page components
import HomePage from './pages/HomePage';
import SelfDevelopmentPage from './pages/SelfDevelopmentPage';
import SkillDevelopmentPage from './pages/SkillDevelopmentPage';

function App() {
  return (
    <Router>
      <Navbar expand="lg" className="professional-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            Skills Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/self-development" className="nav-link-custom">
                Self-Development
              </Nav.Link>
              <Nav.Link as={Link} to="/skill-development" className="nav-link-custom">
                Skill-Development
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/self-development" element={<SelfDevelopmentPage />} />
          <Route path="/skill-development" element={<SkillDevelopmentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;