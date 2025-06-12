package com.example.ProjectNest.Repository;

import com.example.ProjectNest.Model.ProjectData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectDataRepository extends JpaRepository<ProjectData, Long> {
}
