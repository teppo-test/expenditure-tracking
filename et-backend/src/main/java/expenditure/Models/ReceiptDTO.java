package expenditure.Models;

import expenditure.Entities.Receipt;
import expenditure.Entities.ReceiptItem;
import lombok.*;

import java.util.List;


@AllArgsConstructor(access = AccessLevel.PACKAGE)
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class ReceiptDTO {

    @Getter @Setter
    private Receipt receipt;

    @Getter @Setter
    private List<ReceiptItem> items;

}
