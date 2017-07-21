package webdriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.springframework.stereotype.Component;

/**
 * Created by juan.hernandez on 7/21/17.
 */

@Component
public class SharedDriver extends EventFiringWebDriver{

    private static WebDriver REAL_DRIVER;
    private static final Thread CLOSE_THREAD = new Thread() {

        @Override
        public void run() {
            quitGlobalInstance();
        }
    };

    private static void quitGlobalInstance() {
        WebDriver driver = REAL_DRIVER;
        REAL_DRIVER = null;
        if (driver != null) {
            driver.quit();
        }
    }

    private static WebDriver getRealDriver() {
        if (REAL_DRIVER == null) {
            System.setProperty("webdriver.gecko.driver", "geckodriver");
            REAL_DRIVER = new FirefoxDriver();
        }
        return REAL_DRIVER;
    }

    public SharedDriver() {
        super(getRealDriver());
        Runtime.getRuntime().addShutdownHook(CLOSE_THREAD);
    }

    @Override
    public void close() {
        if (Thread.currentThread() != CLOSE_THREAD) {
            throw new UnsupportedOperationException("You shouldn't close this WebDriver. It's shared and will close when the JVM exits.");
        }
        try {
            super.close();
        } catch (Throwable e) {
            e.printStackTrace();
        }
    }


}
