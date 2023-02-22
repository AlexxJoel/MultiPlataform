package mx.airnbnb.servicesairbnb.Person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> listaPerson(){
        return  personRepository.findAll();
    }

    public Optional<Person> getPerson(int idPerson){
        return personRepository.findById(idPerson);
    }


    public void deletePerson(int idPerson){
        personRepository.deleteById(idPerson);
    }

    public boolean existsByIdPerson(int idPerson){
        return personRepository.existsById(idPerson);
    }


    public  void save(Person person){

        personRepository.saveAndFlush(person);
    }
}
