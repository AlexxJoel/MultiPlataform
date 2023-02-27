package mx.airnbnb.servicesairbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.airnbnb.servicesairbnb.Person.Person;
import mx.airnbnb.servicesairbnb.User.User;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PersonDto {
    private int id;

    @Size(min = 3, max = 50)
    private String full_name;


    private String birthday;


    private User user;

    public Person getPerson(){
        return new Person(
                getId(),
                getFull_name(),
                getBirthday(),
                getUser()
        );
    }
}
