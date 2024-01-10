package AlmaLibre.eCommerce.respositories;

import AlmaLibre.eCommerce.models.BuyOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BuyOrderRepository extends JpaRepository<BuyOrder,Long> {

}
