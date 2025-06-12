import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEye, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px ${props => props.theme.shadow};
  transition: transform 0.3s ease;
  
  &:hover { transform: translateY(-5px); }
`;

const CardContent = styled.div`
  padding: 20px;
  
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    color: ${props => props.theme.primary};
  }
  .description {
    color: ${props => props.theme.text};
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
    
    .student-name {
      font-weight: 600;
      color: ${props => props.theme.primary};
    }
  }
  .links {
    margin-bottom: 10px;
    a {
      display: inline-flex;
      align-items: center;
      color: ${props => props.theme.primary};
      font-weight: 500;
      font-size: 14px;
      &:hover { text-decoration: underline; }
      svg { margin-right: 6px; }
    }
  }
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    
    button {
      padding: 6px 12px;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      
      &.delete {
        background-color: #ff5252;
        &:hover {
          background-color: #e04848;
        }
      }
    }
  }
`;

const ProjectCard = ({ project, deleteProject }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteProject(project.id); // Call parent handler to delete
    setIsDeleting(false);
  };
  
  return (
    <Card>
      <CardContent>
        {/* Project title */}
        <h3>{project.projectTitle}</h3>
        
        {/* Short description (truncated) */}
        <p className="description">{project.projectDescription}</p>
        
        {/* Meta info: student name, year, college ID */}
        <div className="meta">
          <div>
            <span className="student-name">{project.studentName}</span> • {project.year}
          </div>
          <div>ID: {project.clgId}</div>
        </div>
        
        {/* Optional project link */}
        {project.projectLinks && (
          <div className="links">
            <a href={project.projectLinks} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> View Project
            </a>
          </div>
        )}
        
        {/* Action buttons: view details and delete */}
        <div className="actions">
          <Link to={`/project/${project.id}`}>
            <button><FaEye /> View Details</button>
          </Link>
          <button 
            className="delete" 
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : (<><FaTrashAlt /> Delete</>)}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
