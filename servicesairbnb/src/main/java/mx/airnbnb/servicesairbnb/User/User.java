package mx.airnbnb.servicesairbnb.User;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.Person.Person;
import mx.airnbnb.servicesairbnb.Rent.Rent;

import javax.persistence.*;
import java.util.List;

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


    @Column(nullable = true)
    private String email ;

    @Column(nullable = true, columnDefinition = "LONGTEXT")
    private String uid;

    @Column(columnDefinition = "LONGTEXT")
    private String image_profile;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "person_id", referencedColumnName = "id" , unique = true)
    @JsonIgnore
    private Person person;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Rent> rent;

    public User(String email, String uid, String image_profile, Person person) {
        this.email = email;
        this.uid = uid;
        this.image_profile = image_profile;
        this.person = person;
    }
}
