package nicebank;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by juan.hernandez on 7/20/17.
 */
public class Money {

    private int dollars;
    private int cents;

    public Money(String amount){
        Pattern pattern = Pattern.compile("^[^\\d]*([\\d]+)\\.([\\d][\\d])$");
        Matcher matcher = pattern.matcher(amount);

        matcher.find();
        this.dollars = Integer.parseInt(matcher.group(1));
        this.dollars = Integer.parseInt(matcher.group(2));
    }

    public Money(int dollars, int cents){
        this.dollars = dollars;
        this.cents = cents;
    }

    public Money(){
        this.dollars = 0;
        this.cents = 0;
    }

    public int dollars() {
        return dollars;
    }

    public int cents() {
        return cents;
    }

    public Money add(Money amount){
        int newCents = cents + amount.cents;
        int newDollars = dollars + amount.dollars;

        if(newCents >= 100){
            newCents -= 100;
            newDollars++;
        }

        return new Money(newDollars, newCents);
    }


    public Money minus(Money amount){
        int newCents = cents - amount.cents;
        int newDollars = dollars - amount.dollars;

        if(newCents < 0){
            newCents += 100;
            newDollars--;
        }

        return new Money(newDollars, newCents);
    }

    @Override
    public boolean equals(Object other){
        boolean equal = false;

        if (other instanceof Money){
            Money otherMoney = (Money)other;
            equal = (this.dollars() == otherMoney.dollars()
                    && this.cents() == otherMoney.cents());
        }

        return equal;
    }

}
