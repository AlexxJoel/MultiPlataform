package mx.airnbnb.servicesairbnb.Rent;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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


    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "departament_id", referencedColumnName = "id")
    @JsonIgnoreProperties("rent")
    private Departament departament;


    private String description;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;


    @Column(nullable = false ,  columnDefinition = "TIMESTAMP")
    private String start_rent;

    @Column(nullable = false ,  columnDefinition = "TIMESTAMP")
    private String end_rent;



}
