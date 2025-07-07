package com.trashClash.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BaseLayout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private int thLevel;
    private String baseType;
    private String imageUrl;
    private String cocShareLink;
    private String tags;
}
