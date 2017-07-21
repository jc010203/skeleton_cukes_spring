package nicebank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by juan.hernandez on 7/21/17.
 */

@Component
public class Teller {

    private Cashslot cashslot;

    @Autowired
    public Teller(Cashslot cashslot){
        this.cashslot = cashslot;
    }

    public void withdrawFrom(Account account, Money amount){
        account.debit(amount);
        cashslot.dispense(amount);
    }
}
