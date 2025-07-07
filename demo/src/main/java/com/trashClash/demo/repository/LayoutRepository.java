package com.trashClash.demo.repository;

import com.trashClash.demo.model.BaseLayout;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LayoutRepository extends JpaRepository<BaseLayout, Long> {
    List<BaseLayout> findByThLevel(int thLevel);
}
