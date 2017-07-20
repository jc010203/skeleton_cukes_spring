package hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import nicebank.AtmServer;


/**
 * Created by juan.hernandez on 7/20/17.
 */
public class ServerHooks {

    private static final int PORT = 8887;

    private AtmServer server;

    @Before
    public void startServer() throws Exception{
        server =  new AtmServer(PORT);
        server.start();
    }

    @After
    public void stopServer() throws Exception {
        server.stop();
    }
}
