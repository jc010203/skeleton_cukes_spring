package nicebank;

import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import transforms.MoneyConverter;

/**
 * Created by juan.hernandez on 7/20/17.
 */
public class Steps {

    @Autowired
    private Account myAccount;

    @Given("^my account has been credited with \\$(\\d+\\.\\d+)$")
    public void myAccountHasBeenCreditedWith$(@Transform(MoneyConverter.class) Money amount) throws Throwable {
       myAccount.credit(amount);
       Assert.assertEquals(myAccount.getBalance(), amount);
    }

    @When("^I withdraw \\$(\\d+)$")
    public void iWithdraw$(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^\\$(\\d+) should be dispensed$")
    public void $ShouldBeDispensed(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the balance of my account should be \\$(\\d+)\\.(\\d+)$")
    public void theBalanceOfMyAccountShouldBe$(int arg1, int arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
