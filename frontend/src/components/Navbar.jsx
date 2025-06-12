import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavContainer = styled.nav`
  background-color: ${props => props.theme.header};
  box-shadow: 0 2px 4px ${props => props.theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  
  .logo {
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.theme.primary};
  }
  .nav-links {
    display: flex;
    gap: 24px;
    a {
      color: ${props => props.theme.text};
      font-weight: 500;
      &:hover { color: ${props => props.theme.primary}; }
    }
  }
  .theme-toggle {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: ${props => props.theme.text};
    &:focus { outline: none; }
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <NavContainer>
      <div className="container">
        <NavContent>
        
          <Link to="/" className="logo">ProjectNest</Link>
          
          
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/add-project">Add Project</Link>
          </div>
       
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </NavContent>
      </div>
    </NavContainer>
  );
};

export default Navbar;
