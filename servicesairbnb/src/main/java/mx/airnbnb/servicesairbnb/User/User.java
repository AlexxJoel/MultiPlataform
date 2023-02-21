package mx.airnbnb.servicesairbnb.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.Person.Person;
import mx.airnbnb.servicesairbnb.Rent.Rent;

import javax.persistence.*;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;

    private String email ;

    private String uid;

    @Column(columnDefinition = "LONGTEXT")
    private String image_profile;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "person_id", referencedColumnName = "id")
    private Person person;

    @OneToOne(mappedBy = "user")
    private Rent rent;

    public User(String email, String uid, String image_profile, Person person, Rent rent) {
        this.email = email;
        this.uid = uid;
        this.image_profile = image_profile;
        this.person = person;
        this.rent = rent;
    }
}
