package mx.airnbnb.servicesairbnb.controllers;

import mx.airnbnb.servicesairbnb.User.User;
import mx.airnbnb.servicesairbnb.User.UserService;
import mx.airnbnb.servicesairbnb.dto.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api_airnbnb/user/")
@CrossOrigin(origins = {"*"})
public class UserController {


    @Autowired
    UserService userService;


    @GetMapping("/")
    public ResponseEntity<List<User>> listUser(){
        List<User> users = userService.listaUser();
        return  new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> userById(@PathVariable("id") int id){

        if (!userService.existsByIdUser(id))
            return new ResponseEntity(new Mensaje("No existe  user"), HttpStatus.NOT_FOUND);

        User user = userService.getUser(id).get();
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> creaUser(@RequestBody User user){

        User user1 = new User(user.getEmail(), user.getUid(), user.getImage_profile(), user.getPerson());
        userService.saveUser(user1);
        return new ResponseEntity(new Mensaje("User creada"), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarUser(@PathVariable("id") int id, @RequestBody User user){

        User user1 = userService.getUser(id).get();

        user1.setEmail(user.getEmail());
        user1.setUid(user.getUid());
        user1.setImage_profile(user.getUid());
        user1.setPerson(user.getPerson());
        user1.setRent(user.getRent());

        userService.save(user1);
        return new ResponseEntity(new Mensaje("Usera actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> borrarUser(@PathVariable("id") int id){
        if (!userService.existsByIdUser(id))
            return new ResponseEntity(new Mensaje("No existe "), HttpStatus.NOT_FOUND);
        userService.deleteUser(id);
        return new ResponseEntity(new Mensaje("Usera eliminada"), HttpStatus.OK);
    }
}
