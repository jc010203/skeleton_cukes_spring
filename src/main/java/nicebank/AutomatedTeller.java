package nicebank;

import org.openqa.selenium.By;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import webdriver.SharedDriver;

/**
 * Created by juan.hernandez on 7/21/17.
 */

@Component
public class AutomatedTeller implements Teller{

    private Cashslot cashslot;
    private SharedDriver webDriver;

    @Autowired
    public AutomatedTeller(Cashslot cashslot, SharedDriver webdriver){
        this.cashslot = cashslot;
        this.webDriver = webdriver;
    }

    /*
    public void withdrawFrom(Account account, Money amount){
        account.debit(amount);
        cashslot.dispense(amount);
    }
    */


    public void withdrawFrom(Account account, Money money){
        try{
            webDriver.get("http://192.168.0.4:9988/");
            webDriver.findElement(By.id("Amount"))
                    .sendKeys(money.toString());
            webDriver.findElement(By.id("Withdraw")).click();
        }finally {
            webDriver.close();
        }
    }
}
