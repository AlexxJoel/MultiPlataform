package mx.airnbnb.servicesairbnb.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Modifying
    @Query(value = "INSERT INTO users VALUES (null,:email, :image,:uid, :id_person)", nativeQuery = true)
    int saveWithUser(
            @Param("email") String email,
            @Param("uid") String uid,
            @Param("image") String image,
            @Param("id_person") int id_person);

}
