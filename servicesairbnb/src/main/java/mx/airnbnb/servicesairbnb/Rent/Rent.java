package mx.airnbnb.servicesairbnb.Rent;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.Departament.Departament;
import mx.airnbnb.servicesairbnb.User.User;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "rents")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Rent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departament_id", referencedColumnName = "id")
    private Departament departament;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    private Date date;

    public Rent(Departament departament, User user, Date date) {
        this.departament = departament;
        this.user = user;
        this.date = date;
    }
}
