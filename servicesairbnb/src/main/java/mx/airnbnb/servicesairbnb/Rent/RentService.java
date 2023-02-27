package mx.airnbnb.servicesairbnb.Rent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RentService {

    @Autowired
    RentRepository rentRepository;

    public List<Rent> listaRent(){
        return  rentRepository.findAll();
    }

    public Optional<Rent> getRent(int idRent){
        return rentRepository.findById(idRent);
    }


    public void deleteRent(int idRent){
        rentRepository.deleteById(idRent);
    }

    public boolean existsByIdRent(int idRent){
        return rentRepository.existsById(idRent);
    }


    public  void save(Rent rent){
        //rentRepository.insert(rent.getDescription(), rent.getEnd_rent(), rent.getStart_rent(), rent.getDepartament().getId(), rent.getUser().getId());
        rentRepository.insert(rent.getDescription(), rent.getEnd_rent(), rent.getStart_rent(), rent.getDepartament().getId(), rent.getUser().getId());
    }


    public  void update(Rent rent){
        rentRepository.update( rent.getDescription(), rent.getEnd_rent(),  rent.getDepartament().getId(), rent.getUser().getId(), rent.getId());
    }





        /*    public Optional<Rent> getByNombreRent(String nombre) {
            return rentRepository.findByNombreRent(nombre);
        }*/

/*    public boolean existsByNombreRent(String nombreRent){
        return rentRepository.existsByNombreRent(nombreRent);
    }*/


}
