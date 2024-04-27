import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import theme from './theme';
import Auth from './RegistrationForm';
import { ThemeProvider as LocalThemeProvider } from './ThemeContext';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import UserList from './users';
import Support from './Support';
import Feedback from './Feedback';

function BottomMenu() {
  return (
    <div className="bottom-menu">
        <Button onClick={() => window.location.href = '/feedback'}>
          <FeedbackIcon />Обратная связь</Button>
        <Button onClick={() => window.location.href = '/support'}>
          <ContactSupportIcon />Поддержка</Button>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <LocalThemeProvider>
        <CssBaseline />
        <Router>
          <div>
            <Header toggleMenu={toggleMenu} />
            <Menu menuOpen={menuOpen} />            
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/lab1" element={<Auth />} />
              <Route path="/lab2" element={<UserList />} />
              <Route path="/support" element={<Support />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
            <BottomMenu />
            <Footer />
          </div>
        </Router>
      </LocalThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;