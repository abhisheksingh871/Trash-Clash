package com.trashClash.demo.controller;

import com.trashClash.demo.model.BaseLayout;
import com.trashClash.demo.repository.LayoutRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/layouts")
@CrossOrigin(origins = "*")
public class LayoutController {

    private final LayoutRepository layoutRepo;

    public LayoutController(LayoutRepository layoutRepo) {
        this.layoutRepo = layoutRepo;
    }

    @GetMapping
    public List<BaseLayout> getAllLayouts() {
        return layoutRepo.findAll();
    }

    @GetMapping("/th/{level}")
    public List<BaseLayout> getLayoutsByThLevel(@PathVariable int level) {
        return layoutRepo.findByThLevel(level);
    }

    @PostMapping
    public BaseLayout createLayout(@RequestBody BaseLayout layout) {
        return (BaseLayout) layoutRepo.save(layout);
    }

    @DeleteMapping("/{id}")
    public void deleteLayout(@PathVariable Long id) {
        layoutRepo.deleteById(id);
    }
}
