$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal.feature");
formatter.feature({
  "line": 1,
  "name": "Cash Withdrawal",
  "description": "",
  "id": "cash-withdrawal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 500599646,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful withdrawal from an account in credit",
  "description": "",
  "id": "cash-withdrawal;successful-withdrawal-from-an-account-in-credit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "my account has been credited with $100.00",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I withdraw $20.00",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "$20.00 should be dispensed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the balance of my account should be $80.00",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 35
    }
  ],
  "location": "Steps.myAccountHasBeenCreditedWith$(Money)"
});
formatter.result({
  "duration": 310213484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20.00",
      "offset": 12
    }
  ],
  "location": "Steps.iWithdraw$(Money)"
});
formatter.result({
  "duration": 391058358,
  "error_message": "java.lang.UnsupportedOperationException: You shouldn\u0027t close this WebDriver. It\u0027s shared and will close when the JVM exits.\n\tat webdriver.SharedDriver.close(SharedDriver.java:48)\n\tat nicebank.AutomatedTeller.withdrawFrom(AutomatedTeller.java:39)\n\tat nicebank.Steps.iWithdraw$(Steps.java:40)\n\tat ✽.When I withdraw $20.00(cash_withdrawal.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20.00",
      "offset": 1
    }
  ],
  "location": "Steps.$ShouldBeDispensed(Money)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "80.00",
      "offset": 37
    }
  ],
  "location": "Steps.theBalanceOfMyAccountShouldBe$(Money)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38839671,
  "status": "passed"
});
});