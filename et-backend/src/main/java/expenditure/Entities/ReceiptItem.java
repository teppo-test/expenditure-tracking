package expenditure.Entities;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name="receipt_item")
public class ReceiptItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter
    private Integer id;

    @Getter @Setter
    private Integer receiptId;

    @Getter @Setter
    private String productName;

    @Getter @Setter
    private float price;

    @Getter @Setter
    private boolean sale;

    @Getter @Setter
    private int saleAmount;

    @Getter @Setter
    private float realPrice;

    @Getter @Setter
    private String marketName;

    @Getter @Setter
    private Timestamp createTime;

}
