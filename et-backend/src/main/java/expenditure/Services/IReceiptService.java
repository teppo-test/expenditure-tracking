package expenditure.Services;

import expenditure.Entities.Receipt;
import expenditure.Entities.ReceiptItem;

import java.util.List;

public interface IReceiptService {

    Receipt addReceipt(Receipt receipt);
    List<ReceiptItem> addReceiptItems(List<ReceiptItem> items);



}
