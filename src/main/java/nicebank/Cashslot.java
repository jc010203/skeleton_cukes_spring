package nicebank;

import org.springframework.stereotype.Component;

/**
 * Created by juan.hernandez on 7/21/17.
 */

@Component
public class Cashslot {

    private Money contents;

    public Money getContents() {
        return contents;
    }

    public void dispense(Money amount){
        contents = amount;
    }
}
