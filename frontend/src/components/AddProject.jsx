import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const FormHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: ${props => props.theme.primary};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: ${props => props.theme.text};
  }
  input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    background-color: ${props => props.theme.inputBg};
    color: ${props => props.theme.text};
    font-size: 16px;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.primary};
      box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.2);
    }
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

const AddProject = ({ addProject }) => {
 
  const [formData, setFormData] = useState({
    studentName: '',
    year: '',
    clgId: '',
    projectTitle: '',
    projectDescription: '',
    projectLinks: '',
    userEmail: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const result = await addProject(formData);
    
    setSubmitting(false);
    
    if (result) {
      setSuccess(true);
      
      setFormData({
        studentName: '',
        year: '',
        clgId: '',
        projectTitle: '',
        projectDescription: '',
        projectLinks: '',
        userEmail: ''
      });
      
      setTimeout(() => setSuccess(false), 3000);
    }
  };
  
  return (
    <FormContainer>
      <FormHeader>Add New Project</FormHeader>
      
      
      {success && (
        <div style={{
          backgroundColor: '#e8f5e9', 
          color: '#2e7d32',            
          padding: '15px',
          borderRadius: '4px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Project added successfully!
        </div>
      )}
      
 
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label>Year</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label>College ID</label>
          <input
            type="text"
            name="clgId"
            value={formData.clgId}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label>Project Title</label>
          <input
            type="text"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label>Project Description</label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          ></textarea>
        </FormGroup>
        
        <FormGroup>
          <label>Project Links (optional)</label>
          <input
            type="url"
            name="projectLinks"
            value={formData.projectLinks}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </FormGroup>
        
        <FormGroup>
          <label>Your Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Add Project'}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default AddProject;
