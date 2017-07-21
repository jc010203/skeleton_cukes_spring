package nicebank;

import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import transforms.MoneyConverter;

import java.util.List;

/**
 * Created by juan.hernandez on 7/20/17.
 */
public class Steps {

    @Autowired
    private Account myAccount;

    @Autowired
    private Teller teller;


    @Autowired
    private Cashslot cashslot;

    @Autowired
    private StudentJDBCTemplate template;

    @Given("^my account has been credited with \\$(\\d+\\.\\d+)$")
    public void myAccountHasBeenCreditedWith$(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        myAccount.credit(amount);
        Assert.assertEquals("Incorrect balance -",myAccount.getBalance(), amount);
    }

    @When("^I withdraw \\$(\\d+\\.\\d+)$")
    public void iWithdraw$(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        teller.withdrawFrom(myAccount, amount);
    }

    @Then("^\\$(\\d+\\.\\d+) should be dispensed$")
    public void $ShouldBeDispensed(@Transform(MoneyConverter.class)Money amount) throws Throwable {
        cashslot.dispense(amount);
    }

    @Then("^the balance of my account should be \\$(\\d+\\.\\d+)$")
    public void theBalanceOfMyAccountShouldBe$(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        Assert.assertEquals("Incorrect balance -",myAccount.getBalance(), amount);
    }
}
