$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal.feature");
formatter.feature({
  "line": 1,
  "name": "Cash Withdrawal",
  "description": "",
  "id": "cash-withdrawal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 485297161,
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
  "duration": 319106698,
  "error_message": "org.springframework.jdbc.CannotGetJdbcConnectionException: Could not get JDBC Connection; nested exception is com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure\n\nLast packet sent to the server was 0 ms ago.\n\tat org.springframework.jdbc.datasource.DataSourceUtils.getConnection(DataSourceUtils.java:80)\n\tat org.springframework.jdbc.core.JdbcTemplate.execute(JdbcTemplate.java:615)\n\tat org.springframework.jdbc.core.JdbcTemplate.update(JdbcTemplate.java:866)\n\tat org.springframework.jdbc.core.JdbcTemplate.update(JdbcTemplate.java:927)\n\tat org.springframework.jdbc.core.JdbcTemplate.update(JdbcTemplate.java:937)\n\tat nicebank.StudentJDBCTemplate.create(StudentJDBCTemplate.java:25)\n\tat nicebank.Steps.myAccountHasBeenCreditedWith$(Steps.java:28)\n\tat ✽.Given my account has been credited with $100.00(cash_withdrawal.feature:4)\nCaused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure\n\nLast packet sent to the server was 0 ms ago.\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat com.mysql.jdbc.Util.handleNewInstance(Util.java:406)\n\tat com.mysql.jdbc.SQLError.createCommunicationsException(SQLError.java:1074)\n\tat com.mysql.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:2103)\n\tat com.mysql.jdbc.ConnectionImpl.\u003cinit\u003e(ConnectionImpl.java:718)\n\tat com.mysql.jdbc.JDBC4Connection.\u003cinit\u003e(JDBC4Connection.java:46)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat com.mysql.jdbc.Util.handleNewInstance(Util.java:406)\n\tat com.mysql.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:302)\n\tat com.mysql.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:282)\n\tat java.sql.DriverManager.getConnection(DriverManager.java:664)\n\tat java.sql.DriverManager.getConnection(DriverManager.java:208)\n\tat org.springframework.jdbc.datasource.DriverManagerDataSource.getConnectionFromDriverManager(DriverManagerDataSource.java:153)\n\tat org.springframework.jdbc.datasource.DriverManagerDataSource.getConnectionFromDriver(DriverManagerDataSource.java:144)\n\tat org.springframework.jdbc.datasource.AbstractDriverBasedDataSource.getConnectionFromDriver(AbstractDriverBasedDataSource.java:155)\n\tat org.springframework.jdbc.datasource.AbstractDriverBasedDataSource.getConnection(AbstractDriverBasedDataSource.java:120)\n\tat org.springframework.jdbc.datasource.DataSourceUtils.doGetConnection(DataSourceUtils.java:111)\n\tat org.springframework.jdbc.datasource.DataSourceUtils.getConnection(DataSourceUtils.java:77)\n\tat org.springframework.jdbc.core.JdbcTemplate.execute(JdbcTemplate.java:615)\n\tat org.springframework.jdbc.core.JdbcTemplate.update(JdbcTemplate.java:866)\n\tat org.springframework.jdbc.core.JdbcTemplate.update(JdbcTemplate.java:927)\n\tat org.springframework.jdbc.core.JdbcTemplate.update(JdbcTemplate.java:937)\n\tat nicebank.StudentJDBCTemplate.create(StudentJDBCTemplate.java:25)\n\tat nicebank.Steps.myAccountHasBeenCreditedWith$(Steps.java:28)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat java.net.Socket.connect(Socket.java:538)\n\tat java.net.Socket.\u003cinit\u003e(Socket.java:434)\n\tat java.net.Socket.\u003cinit\u003e(Socket.java:244)\n\tat com.mysql.jdbc.StandardSocketFactory.connect(StandardSocketFactory.java:253)\n\tat com.mysql.jdbc.MysqlIO.\u003cinit\u003e(MysqlIO.java:280)\n\tat com.mysql.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:2026)\n\t... 67 more\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 21476476,
  "status": "passed"
});
});