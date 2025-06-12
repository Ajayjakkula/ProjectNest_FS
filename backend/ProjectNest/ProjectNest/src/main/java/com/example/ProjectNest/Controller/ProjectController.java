package com.example.ProjectNest.Controller;

import com.example.ProjectNest.Model.ProjectData;
import com.example.ProjectNest.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    @Autowired
    private ProjectService service;


    @PostMapping("/post")
    public ProjectData postProject(@RequestBody ProjectData data) {
        return service.postProject(data);
    }


    @GetMapping("/all")
    public List<ProjectData> getAllProjects() {
        return service.getAllProjects();
    }


    @GetMapping("/{id}")
    public Optional<ProjectData> getProjectById(@PathVariable Long id) {
        return service.getProjectById(id);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteProject(@PathVariable Long id) {
        service.deleteProject(id);
    }
}
