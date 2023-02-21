package mx.airnbnb.servicesairbnb.Person;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.User.User;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "persons")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;

    private String full_name;

    private Date birthday;

    @OneToOne(mappedBy = "person")
    private User  user;

    public Person(String full_name, Date birthday, User user) {
        this.full_name = full_name;
        this.birthday = birthday;
        this.user = user;
    }
}
