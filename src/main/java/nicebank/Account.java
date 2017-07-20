package nicebank;

import org.springframework.stereotype.Component;

/**
 * Created by juan.hernandez on 7/20/17.
 */

@Component
public class Account {

    private Money balance = new Money();

    public void credit(Money amount){
        balance = balance.add(amount);
    }

    public void debit(Money amount){
        balance = balance.minus(amount);
    }

    public Money getBalance() {
        return balance;
    }
}
