package expenditure.Controllers;


import expenditure.Entities.Receipt;
import expenditure.Models.ReceiptDTO;
import expenditure.Services.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

@RestController
@RequestMapping("/api/receipt/")
public class ReceiptController {

    @Autowired
    private ReceiptService receiptService;

    @PostMapping("add")
    private ResponseEntity<?> addNewReceipt(@RequestBody ReceiptDTO receiptDTO){

        //Check that there is data to insert
        if(receiptDTO.getReceipt() == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("NO_RECEIPT_DATA_FOUND");
        if(receiptDTO.getItems() == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("NO_RECEIPT_ITEMS_DATA_FOUND");


        return null;
    }

}
