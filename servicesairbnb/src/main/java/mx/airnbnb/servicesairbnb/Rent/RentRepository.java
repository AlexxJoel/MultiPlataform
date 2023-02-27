package mx.airnbnb.servicesairbnb.Rent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RentRepository extends JpaRepository<Rent, Integer> {


    @Modifying
    @Query(value = "INSERT INTO rents VALUES (null, :description, :end_rent, :start_rent, :depa_id, :user_id)", nativeQuery = true)
    int insert(
            @Param("description") String description,
            @Param("end_rent") String end_rent,
            @Param("start_rent") String start_rent,
            @Param("depa_id") int depa_id,
            @Param("user_id") int user_id);

    @Modifying
    @Query(value = "UPDATE rents  SET description = :description, end_rent = :end_rent, departament_id = :depa_id, user_id=:user_id  WHERE id = :id", nativeQuery = true)
    void update(
            @Param("description") String description,
            @Param("end_rent") String end_rent,
            @Param("depa_id") int depa_id,
            @Param("user_id") int user_id,
            @Param("id") int id
            );
}
