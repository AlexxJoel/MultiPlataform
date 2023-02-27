package mx.airnbnb.servicesairbnb.Person;

import mx.airnbnb.servicesairbnb.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    //Servicio para obtener todos los registros de people
    @org.springframework.transaction.annotation.Transactional(readOnly = true)
    public CustomResponse<List<Person>> getAll(){
        return new CustomResponse<>(
                this.personRepository.findAll(),
                false,
                200,
                "Ok"
        );
    }

    //Servicio para obtener a una persona
    @org.springframework.transaction.annotation.Transactional(readOnly = true)
    public CustomResponse<Person> getOne(int id){
        return new CustomResponse<>(
                this.personRepository.findById(id).get(),
                false,
                200,
                "Ok"
        );
    }

    //Servicio para insertar a una persona
    //Valida la existencia por curp
    @org.springframework.transaction.annotation.Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Person> insert(Person person){

        return new CustomResponse<>(
                this.personRepository.saveAndFlush(person),
                false,
                200,
                "Persona registrada correctamente"
        );
    }

    //Servicio para modificar a una persona
    //Valida la existencia del registro por id
    @org.springframework.transaction.annotation.Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Person> update(Person person){
        if(!this.personRepository.existsById(person.getId())){
            return new CustomResponse<>(
                    null,
                    true,
                    400,
                    "La persona no existe"
            );
        }
        return new CustomResponse<>(
                this.personRepository.saveAndFlush(person),
                false,
                200,
                "Persona actualizada correctamente"
        );
    }


    public void deletePerson(int id){
        personRepository.deleteById(id);
    }

    public boolean existsByIdPerson(int id){
        return personRepository.existsById(id);
    }



}
