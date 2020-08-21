package expenditure.Entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name="market")
public class Market implements Serializable {


    @Id
    @Getter @Setter
    private String name;

    @Getter @Setter
    private float latitude;

    @Getter @Setter
    private float longtitude;


}
