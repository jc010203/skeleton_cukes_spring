$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal.feature");
formatter.feature({
  "line": 1,
  "name": "Cash Withdrawal",
  "description": "",
  "id": "cash-withdrawal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 734432527,
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
  "name": "I withdraw $20",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "$20 should be dispensed",
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
  "duration": 706506075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "Steps.iWithdraw$(int)"
});
formatter.result({
  "duration": 5260760,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat nicebank.Steps.iWithdraw$(Steps.java:45)\n\tat ✽.When I withdraw $20(cash_withdrawal.feature:5)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "Steps.$ShouldBeDispensed(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 37
    },
    {
      "val": "00",
      "offset": 40
    }
  ],
  "location": "Steps.theBalanceOfMyAccountShouldBe$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22888337,
  "status": "passed"
});
});