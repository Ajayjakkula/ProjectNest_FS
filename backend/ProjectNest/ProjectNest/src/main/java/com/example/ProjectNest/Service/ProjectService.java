package com.example.ProjectNest.Service;

import com.example.ProjectNest.Model.ProjectData;
import com.example.ProjectNest.Repository.ProjectDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectDataRepository repo;


    public ProjectData postProject(ProjectData data) {
        return repo.save(data);
    }


    public List<ProjectData> getAllProjects() {
        return repo.findAll();
    }


    public Optional<ProjectData> getProjectById(Long id) {
        return repo.findById(id);
    }


    public void deleteProject(Long id) {
        repo.deleteById(id);
    }
}
