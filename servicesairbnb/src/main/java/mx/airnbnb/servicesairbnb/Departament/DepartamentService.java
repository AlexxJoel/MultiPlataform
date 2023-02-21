package mx.airnbnb.servicesairbnb.Departament;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DepartamentService {


    @Autowired
    DepartamentRepository departamentRepository;

    public List<Departament> listaDepartament(){
        return  departamentRepository.findAll();
    }

    public Optional<Departament> getDepartament(int idDepartament){
        return departamentRepository.findById(idDepartament);
    }


    public void deleteDepartament(int idDepartament){
        departamentRepository.deleteById(idDepartament);
    }

    public boolean existsByIdDepartament(int idDepartament){
        return departamentRepository.existsById(idDepartament);
    }


    public  void save(Departament depa){
        departamentRepository.save(depa);
    }
}
