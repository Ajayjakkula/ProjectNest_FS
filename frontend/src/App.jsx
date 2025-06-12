import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import AddProject from './components/AddProject';
import Footer from './components/Footer';
import { lightTheme, darkTheme } from './themes';

function App() {
 
  const [theme, setTheme] = useState('light');
  
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/projects/all');
      setProjects(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch projects. Please try again later.');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const addProject = async (projectData) => {
    try {
      const response = await axios.post('http://localhost:8080/projects/post', projectData);
      setProjects(prev => [...prev, response.data]);
      return true;
    } catch (err) {
      console.error('Error adding project:', err);
      return false;
    }
  };


  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/projects/delete/${id}`);
      setProjects(prev => prev.filter(project => project.id !== id));
      return true;
    } catch (err) {
      console.error('Error deleting project:', err);
      return false;
    }
  };

  
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
  
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="container" style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={
                <ProjectList 
                  projects={projects} 
                  loading={loading} 
                  error={error}
                  deleteProject={deleteProject}
                />
              } />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/add-project" element={<AddProject addProject={addProject} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
