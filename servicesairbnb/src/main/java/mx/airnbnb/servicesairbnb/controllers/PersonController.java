package mx.airnbnb.servicesairbnb.controllers;

import mx.airnbnb.servicesairbnb.Person.PersonService;
import mx.airnbnb.servicesairbnb.Person.Person;
import mx.airnbnb.servicesairbnb.dto.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api_airnbnb/person/")
@CrossOrigin(origins = {"*"})
public class PersonController {


    @Autowired
    PersonService personService;


    @GetMapping("/")
    public ResponseEntity<List<Person>> listPerson(){
        List<Person> persons = personService.listaPerson();
        return  new ResponseEntity<List<Person>>(persons, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> personById(@PathVariable("id") int id){

        if (personService.existsByIdPerson(id))
            return new ResponseEntity(new Mensaje("No existe la persona"), HttpStatus.NOT_FOUND);

        Person person = personService.getPerson(id).get();
        return new ResponseEntity(person, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> creaPerson(@RequestBody Person person){



        Person person1 = new Person(person.getFull_name(), person.getBirthday(), person.getUser());
        personService.save(person1);
        return new ResponseEntity(new Mensaje("Persona creada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> actualizarPerson(@PathVariable("id") int id, @RequestBody Person person){

        Person person1 = personService.getPerson(id).get();

        person1.setFull_name(person.getFull_name());
        person1.setBirthday(person.getBirthday());
        person1.setUser(person.getUser());
        personService.save(person1);
        return new ResponseEntity(new Mensaje("Persona actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> borrarPerson(@PathVariable("id") int id){
        if (personService.existsByIdPerson(id))
            return new ResponseEntity(new Mensaje("No existe "), HttpStatus.NOT_FOUND);
        personService.deletePerson(id);
        return new ResponseEntity(new Mensaje("Persona eliminada"), HttpStatus.OK);
    }
}
