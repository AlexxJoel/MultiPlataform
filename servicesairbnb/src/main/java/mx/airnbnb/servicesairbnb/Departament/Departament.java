package mx.airnbnb.servicesairbnb.Departament;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.Rent.Rent;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "departaments")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Departament {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;

    @Column(nullable = false)
    private  String name;

    @Column(columnDefinition = "JSON")
    private String location;
    //cp , lat, long,

    @Column(columnDefinition = "JSON")
    private String images; //image

    @Column(columnDefinition = "LONGTEXT")
    private String description;


    @Column(nullable = false)
    private float rating;

    @Column(nullable = false)
    private int quantity_rating;

    @Column(nullable = false)
    private float price;

    @OneToMany(mappedBy = "departament", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Rent> rent;



}

