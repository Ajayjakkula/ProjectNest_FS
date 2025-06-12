import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    color: ${props => props.theme.primary};
  }
  .back-link {
    display: inline-flex;
    align-items: center;
    margin-top: 20px;
    color: ${props => props.theme.primary};
    font-weight: 500;
    font-size: 14px;
    svg { margin-right: 5px; }
  }
`;

const DetailContent = styled.div`
  .section {
    margin-bottom: 25px;
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: ${props => props.theme.text};
      border-bottom: 1px solid ${props => props.theme.border};
      padding-bottom: 5px;
    }
    p {
      line-height: 1.7;
    }
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
    .meta-item {
      flex: 1;
      min-width: 200px;
      strong {
        display: block;
        margin-bottom: 5px;
        color: ${props => props.theme.text};
      }
      span {
        color: ${props => props.theme.primary};
        font-weight: 500;
      }
    }
  }
  .project-link {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background-color: ${props => props.theme.primary};
    color: white;
    border-radius: 4px;
    font-weight: 500;
    margin-top: 10px;
    text-decoration: none;
    &:hover { opacity: 0.9; }
    svg { margin-right: 8px; }
  }
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

const ProjectDetail = () => {
  const { id } = useParams();    
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/projects/${id}`);
        setProject(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch project details.');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <DetailContainer>
        <Loading>Loading project details...</Loading>
      </DetailContainer>
    );
  }

  if (error) {
    return (
      <DetailContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <DetailHeader>
        <h1>{project.projectTitle}</h1>
      </DetailHeader>
      
      <DetailContent>
        
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to all projects
        </Link>

       
        <div className="meta">
          <div className="meta-item">
            <strong>Student Name</strong>
            <span>{project.studentName}</span>
          </div>
          <div className="meta-item">
            <strong>Year</strong>
            <span>{project.year}</span>
          </div>
          <div className="meta-item">
            <strong>College ID</strong>
            <span>{project.clgId}</span>
          </div>
          <div className="meta-item">
            <strong>Email</strong>
            <span>{project.userEmail}</span>
          </div>
        </div>
        
        
        <div className="section">
          <h2>Project Description</h2>
          <p>{project.projectDescription}</p>
        </div>
        
      
        {project.projectLinks && (
          <div className="section">
            <h2>Project Link</h2>
            <a 
              href={project.projectLinks} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt /> View Project
            </a>
          </div>
        )}
      </DetailContent>
    </DetailContainer>
  );
};

export default ProjectDetail;
