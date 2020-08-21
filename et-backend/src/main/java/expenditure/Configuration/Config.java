package expenditure.Configuration;


import expenditure.Services.IReceiptService;
import expenditure.Services.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean
    @Autowired
    public IReceiptService getReceiptService(){
        return new ReceiptService();
    }

}
