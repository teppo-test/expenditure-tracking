package expenditure.Services;

import expenditure.Entities.Receipt;
import expenditure.Entities.ReceiptItem;
import expenditure.Repositories.ReceiptItemRepository;
import expenditure.Repositories.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ReceiptService implements IReceiptService {

    @Autowired
    private ReceiptRepository receiptRepository;

    @Autowired
    private ReceiptItemRepository receiptItemRepository;


    @Override
    public Receipt addReceipt(Receipt receipt) {
        return receiptRepository.save(receipt);
    }

    @Override
    public List<ReceiptItem> addReceiptItems(List<ReceiptItem> items) {
        return receiptItemRepository.saveAll(items);
    }
}
