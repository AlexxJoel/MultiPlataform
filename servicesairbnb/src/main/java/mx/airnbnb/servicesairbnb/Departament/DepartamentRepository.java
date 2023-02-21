package mx.airnbnb.servicesairbnb.Departament;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartamentRepository  extends JpaRepository<Departament, Integer> {


}
