package mx.airnbnb.servicesairbnb.controllers;

import mx.airnbnb.servicesairbnb.Person.PersonService;
import mx.airnbnb.servicesairbnb.Person.Person;
import mx.airnbnb.servicesairbnb.dto.Mensaje;
import mx.airnbnb.servicesairbnb.dto.PersonDto;
import mx.airnbnb.servicesairbnb.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api_airnbnb/person/")
@CrossOrigin(origins = {"*"})
public class PersonController {

    @Autowired
    PersonService personService;

    //Obtener todos los registros de people
    @GetMapping("/")
    public ResponseEntity<CustomResponse<List<Person>>> getAll(){
        return new ResponseEntity<>(
                this.personService.getAll(),
                HttpStatus.OK
        );
    }

    //Obtener un registro de people
    @GetMapping("/{id}")
    public ResponseEntity<CustomResponse<Person>> getOne(@PathVariable("id") int id){
        if (!personService.existsByIdPerson(id))
            return new ResponseEntity(new Mensaje("No existe "), HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(
                this.personService.getOne(id),
                HttpStatus.OK
        );
    }

    //Insertar a una persona
    @PostMapping("/")
    public ResponseEntity<CustomResponse<Person>> insert(
            @Valid @RequestBody PersonDto personDto){
        return new ResponseEntity<>(
                this.personService.insert(personDto.getPerson()),
                HttpStatus.CREATED
        );
    }

    //Modificar una persona
    @PutMapping("/")
    public ResponseEntity<CustomResponse<Person>> update(
            @RequestBody PersonDto personDto,@Valid BindingResult result){
        if(result.hasErrors()){
            return new ResponseEntity<>(
                    null,
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                this.personService.update(personDto.getPerson()),
                HttpStatus.CREATED
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> borrarUser(@PathVariable("id") int id){
        if (!personService.existsByIdPerson(id))
            return new ResponseEntity(new Mensaje("No existe "), HttpStatus.NOT_FOUND);
        personService.deletePerson(id);
        return new ResponseEntity(new Mensaje("Persona eliminada"), HttpStatus.OK);
    }
}
