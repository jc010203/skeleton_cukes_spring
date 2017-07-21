package nicebank;

/**
 * Created by juan.hernandez on 7/21/17.
 */
public interface Teller {
    void withdrawFrom(Account account, Money money);
}
