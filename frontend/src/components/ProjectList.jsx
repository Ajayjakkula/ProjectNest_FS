import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const ProjectListContainer = styled.div`
  padding: 40px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 32px;
    color: ${props => props.theme.text};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 20px;
`;

const Loading = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #b71c1c;
  padding: 20px;
  border-radius: 4px;
  margin: 20px 0;
`;

const ProjectList = ({ projects, loading, error, deleteProject }) => {
  return (
    <ProjectListContainer className="container">
      <Header>
        <h1>All Projects</h1>
        <Link to="/add-project">
          <button>Add New Project</button>
        </Link>
      </Header>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {loading ? (
        <Loading>Loading projects...</Loading>
      ) : (
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              deleteProject={deleteProject}
            />
          ))}
        </ProjectsGrid>
      )}
    </ProjectListContainer>
  );
};

export default ProjectList;
