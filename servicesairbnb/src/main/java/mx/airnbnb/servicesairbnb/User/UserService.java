package mx.airnbnb.servicesairbnb.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> listaUser(){
        return  userRepository.findAll();
    }

    public Optional<User> getUser(int idUser){
        return userRepository.findById(idUser);
    }


    public void deleteUser(int idUser){
        userRepository.deleteById(idUser);
    }

    public boolean existsByIdUser(int idUser){
        return userRepository.existsById(idUser);
    }


    public  void save(User user){
        userRepository.save(user);
    }

    public  void saveUser(User user){
        userRepository.saveWithUser(user.getEmail() , user.getImage_profile(),  user.getUid(), user.getPerson().getId()  );
    }
}
