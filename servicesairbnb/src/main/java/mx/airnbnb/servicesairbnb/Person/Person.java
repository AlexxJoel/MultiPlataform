package mx.airnbnb.servicesairbnb.Person;

import com.fasterxml.jackson.annotation.JsonIgnore;
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


    @Column(nullable = false)
    private String full_name;

    @Column(nullable = false)
    private Date birthday;


    @OneToOne(mappedBy = "person", cascade = CascadeType.ALL, optional = false)
    @JsonIgnore
    private User  user;

    public Person(int id, String full_name, Date birthday, User user) {
        this.id = id;
        this.full_name = full_name;
        this.birthday = birthday;
        this.user = user;
    }


    public Person getPerson(){
        return new Person(
                getId(),
                getFull_name(),
                getBirthday(),
                getUser()
        );
    }
}
