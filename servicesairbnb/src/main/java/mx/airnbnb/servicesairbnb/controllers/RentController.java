package mx.airnbnb.servicesairbnb.controllers;


import mx.airnbnb.servicesairbnb.Rent.Rent;
import mx.airnbnb.servicesairbnb.Rent.RentService;
import mx.airnbnb.servicesairbnb.dto.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api_airnbnb/rent/")
@CrossOrigin(origins = {"*"})
public class RentController {

    @Autowired
    RentService rentService;


    @GetMapping("/")
    public ResponseEntity<List<Rent>> listRent(){
        List<Rent> torres = rentService.listaRent();
        return  new ResponseEntity<List<Rent>>(torres, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rent> rentById(@PathVariable("id") int id){

        if (rentService.existsByIdRent(id))
            return new ResponseEntity(new Mensaje("No existe la renta"), HttpStatus.NOT_FOUND);

        Rent rent = rentService.getRent(id).get();
        return new ResponseEntity(rent, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> creaRent(@RequestBody Rent rent){

        Rent rentc = new Rent(rent.getDepartament(), rent.getUser(), rent.getDate());
        rentService.save(rentc);
        return new ResponseEntity(new Mensaje("Renta creada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> actualizarRent(@PathVariable("id") int id, @RequestBody Rent rent){

        Rent rent1 = rentService.getRent(id).get();

        rent1.setDepartament(rent.getDepartament());
        rent1.setUser(rent.getUser());
        rent1.setDate(rent.getDate());
        rentService.save(rent1);
        return new ResponseEntity(new Mensaje("Renta actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> borrarRent(@PathVariable("id") int id){
        if (rentService.existsByIdRent(id))
            return new ResponseEntity(new Mensaje("No existe "), HttpStatus.NOT_FOUND);
        rentService.deleteRent(id);
        return new ResponseEntity(new Mensaje("Renta eliminada"), HttpStatus.OK);
    }
}
