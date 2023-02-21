package mx.airnbnb.servicesairbnb.Departament;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.Person.Person;
import mx.airnbnb.servicesairbnb.Rent.Rent;
import mx.airnbnb.servicesairbnb.User.User;

import javax.persistence.*;

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

    private  String name;

    @Column(columnDefinition = "JSON")
    private String location;
    //cp , lat, long,

    @Column(columnDefinition = "JSON")
    private String images; //image

    @Column(columnDefinition = "LONGTEXT")
    private String description;

    private float rating;

    private int quantity_rating;

    private float price;

    @OneToOne(mappedBy = "departament")
    private Rent rent;

    public Departament(String name, String location, String images, String description, float rating, int quantity_rating, float price) {
        this.name = name;
        this.location = location;
        this.images = images;
        this.description = description;
        this.rating = rating;
        this.quantity_rating = quantity_rating;
        this.price = price;
        this.rent = rent;
    }
}

