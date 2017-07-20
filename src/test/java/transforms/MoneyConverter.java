package transforms;

import cucumber.api.Transformer;
import nicebank.Money;

/**
 * Created by juan.hernandez on 7/20/17.
 */
public class MoneyConverter extends Transformer<Money> {

    public Money transform(String amount){
        String[] numbers = amount.split("\\.");
        int dollars = Integer.parseInt(numbers[0]);
        int cents = Integer.parseInt(numbers[1]);

        return new Money(dollars, cents);
    }
}
