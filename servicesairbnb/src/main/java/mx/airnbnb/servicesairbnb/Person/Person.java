package mx.airnbnb.servicesairbnb.Person;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.User.User;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "persons")
//@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;


    @Column(nullable = true)
    private String full_name;

    @Column(nullable = true ,  columnDefinition = "TIMESTAMP")
    private String birthday;


    @OneToOne(mappedBy = "person", cascade = CascadeType.ALL, optional = false)
    @JsonIgnoreProperties("person")
    private User  user;

    public Person(int id, String full_name, String birthday, User user) {
        this.id = id;
        this.full_name = full_name;
        this.birthday = birthday;
        this.user = user;
        this.user.setPerson(this);
    }

}
