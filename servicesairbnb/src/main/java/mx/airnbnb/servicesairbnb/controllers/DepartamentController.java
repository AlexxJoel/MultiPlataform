package mx.airnbnb.servicesairbnb.controllers;

import mx.airnbnb.servicesairbnb.Departament.DepartamentService;
import mx.airnbnb.servicesairbnb.Departament.Departament;
import mx.airnbnb.servicesairbnb.Departament.DepartamentService;
import mx.airnbnb.servicesairbnb.dto.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api_airnbnb/departament/")
@CrossOrigin(origins = {"*"})
public class DepartamentController {

    @Autowired
    DepartamentService departamentService;


    @GetMapping("/")
    public ResponseEntity<List<Departament>> listDepartament(){
        List<Departament> departaments = departamentService.listaDepartament();
        return  new ResponseEntity<List<Departament>>(departaments, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Departament> departamentById(@PathVariable("id") int id){

        if (!departamentService.existsByIdDepartament(id))
            return new ResponseEntity(new Mensaje("No existe el departamento"), HttpStatus.NOT_FOUND);

        Departament departaments = departamentService.getDepartament(id).get();
        return new ResponseEntity(departaments, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> creaDepartament(@RequestBody Departament departament){
        Departament departament1 = new Departament(departament.getId(), departament.getName(), departament.getLocation(), departament.getImages(), departament.getDescription(), departament.getRating(), departament.getQuantity_rating(), departament.getPrice(), departament.getRent());

        departamentService.save(departament1);
        return new ResponseEntity(new Mensaje("Departamenta creada"), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<?> actualizarDepartament( @RequestBody Departament departament){

        Departament departament1 = departamentService.getDepartament(departament.getId()).get();

        departament1.setName(departament.getName());
        departament1.setDescription(departament.getDescription());
        departament1.setImages(departament.getImages());
        departament1.setLocation(departament.getLocation());
        departament1.setQuantity_rating(departament.getQuantity_rating());
        departament1.setRating(departament.getRating());
        departament1.setPrice(departament.getPrice());
        departamentService.save(departament1);
        return new ResponseEntity(new Mensaje("Departamenta actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> borrarDepartament(@PathVariable("id") int id){
        if (!departamentService.existsByIdDepartament(id))
            return new ResponseEntity(new Mensaje("No existe "), HttpStatus.NOT_FOUND);
        departamentService.deleteDepartament(id);
        return new ResponseEntity(new Mensaje("Departamento eliminada"), HttpStatus.OK);
    }

}
