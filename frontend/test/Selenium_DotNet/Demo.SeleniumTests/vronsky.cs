using System;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Remote;
using System.Threading;

namespace Demo.SeleniumTests
{
    /// <summary>
    /// Summary description for MySeleniumTests
    /// </summary>
    [TestClass]
    public class VronskyTests
    {
        private static IWebDriver driver;
        static int delay = 1000;


        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest001_noneexisting()
        {
            //WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            driver.Navigate().GoToUrl("https://vronsky.com/noneexisting");
            Assert.IsTrue(true, "Page #1 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest002_privacy()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #2 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest003_root()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #3 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest004()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #4 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest005()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #5 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest006()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #6 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest007()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #7 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest008()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #8 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest009()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #9 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest010()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #10 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest011()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #11 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest012()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #12 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest013()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #1 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest014()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #2 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest015()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #3 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest016()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #4 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest017()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #5 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest018()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #6 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest019()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #7 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest020()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #8 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest021()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #9 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest022()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #10 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest023()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #11 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest024()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #12 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest025()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #1 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest026()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #2 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest027()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #3 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest028()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #4 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest029()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #5 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest030()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #6 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest031()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #7 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest032()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #8 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest033()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #9 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest034()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #10 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest035()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/");
            Assert.IsTrue(true, "Page #11 loaded");
            Thread.Sleep(delay);
        }

        [TestMethod]
        [TestCategory("ChromeVronskiy")]
        public void VronskiyComTest036()
        {
            driver.Navigate().GoToUrl("https://vronsky.com/Privacy");
            Assert.IsTrue(true, "Page #12 loaded");
            Thread.Sleep(delay);
            


            /*
            driver.FindElement(By.Id("sb_form_q")).SendKeys("Azure Pipelines" + Keys.Enter);

            wait.Until(driver2 => driver2.FindElement(By.CssSelector("#b_results li.b_algo h2 a ")).Displayed);
            IWebElement firstResult = driver.FindElement(By.CssSelector("#b_results li.b_algo h2 a "));
            Console.WriteLine(firstResult.ToString());

            IWebElement link =driver.FindElement(By.CssSelector("#b_results li.b_algo h2 a"));
            String href = link.GetAttribute("href");
            driver.Navigate().GoToUrl(href);

            wait.Until(driver2 => driver2.FindElement(By.CssSelector("#nav-site-search-button")).Displayed);
            Console.WriteLine(driver.Title);
            Assert.IsTrue(driver.Title.Contains("Azure"), "Verified title of the page");
            */
        }


        [ClassInitialize()]
        public static void TestFixtureSetup(TestContext context)
        {


            // Selenosis chrome


            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.SetCapability("browserName", "chrome");
            capabilities.SetCapability("browserVersion", "87.0");
            capabilities.SetCapability("enableVNC", true);
            var timeout = TimeSpan.FromSeconds(120);
            driver = new RemoteWebDriver(new Uri("http://192.168.1.101:31000/wd/hub"), capabilities, timeout);

            //ChromeOptions chromeOptions = new ChromeOptions();
            //chromeOptions.AddArgument("no-sandbox");
            //chromeOptions.AddArgument("user-data-dir=/home/selenium/chrome-profile-u1");
            //driver = new RemoteWebDriver(new Uri("http://192.168.1.101:31000/wd/hub"), chromeOptions);

            //var timeout = TimeSpan.FromSeconds(120);
            // Selenosis
            //driver = new RemoteWebDriver(new Uri("http://192.168.1.101:31000/wd/hub"), chromeOptions);

            // Moon

            //chromeOptions.AddAdditionalCapability("enableVNC", true, true);
            //chromeOptions.AddAdditionalCapability("screenResolution", "1920x1080x24", true);
            //capabilities.SetCapability(ChromeOptions.Capability, chromeOptions);
            //driver = new RemoteWebDriver(new Uri("http://192.168.1.101:31000/wd/hub"), capabilities);


            // Windows works from this comp, another linux comp, another windows comp
            //ChromeOptions chromeOptions = new ChromeOptions();
            //chromeOptions.AddArgument(@"user-data-dir=C:\Users\svron\source\repos\meanmine\tests\chrome-profile-container");
            //driver = new ChromeDriver(chromeOptions);

            // Selenium Grid 3
            // ChromeOptions chromeOptions = new ChromeOptions();
            // driver = new RemoteWebDriver(new Uri("http://192.168.1.101:32678/wd/hub"), chromeOptions);

            // Selenium Grid 4
            // ChromeOptions chromeOptions = new ChromeOptions();
            // driver = new RemoteWebDriver(new Uri("http://192.168.1.101:4444"), chromeOptions);

            // Callisto
            // var capabilities = new ChromeOptions();
            // driver = new RemoteWebDriver(new Uri("http://callisto.local"), capabilities);

            // Selenosis
            // DesiredCapabilities capabilities = new DesiredCapabilities("chrome", "88.0", new Platform(PlatformType.Any));
            // driver = new RemoteWebDriver(new Uri("http://192.168.1.101:31000/wd/hub"), capabilities);


            //chromeOptions.AddArgument("profile-directory=Default");
            //chromeOptions.BinaryLocation = "/usr/bin/chromedriver";
            //chromeOptions.AddArgument("--disable-gpu");
            //chromeOptions.AddArgument("--no-sandbox");
            //chromeOptions.AddArgument("--disable-dev-shm-usage");
            //chromeOptions.AddArgument("--headless");

            //chromeOptions.AddArgument("no-sandbox");
            //chromeOptions.AddArgument("user-data-dir=/home/selenium/chrome-profile-container");
            //chromeOptions.AddArgument("profile-directory=Default");
            //chromeOptions.BinaryLocation = "/usr/bin/chromedriver";
            //chromeOptions.BinaryLocation = "/usr/bin/google-chrome";
            //chromeOptions.AddArgument("user-data-dir=/home/selenium/chrome-profile-u1");
            //FirefoxOptions firefoxOptions = new FirefoxOptions();
            //firefoxOptions.AddArgument("no-sandbox");
            //firefoxOptions.AddArgument("-profile");
            //firefoxOptions.AddArgument("/home/selenium/firefox-profile-shutkova");
            //driver = new RemoteWebDriver(new Uri("http://192.168.1.101:31000/wd/hub"), firefoxOptions);

            // OpenQA.Selenium.
            // var capabilities = new DesiredCapabilities("UNKNOWN", "", new Platform(PlatformType.Any));
            // driver = new RemoteWebDriver(new Uri("http://callisto.local"), capabilities);
            /*
            string browser = "Chrome";
            switch (browser)
            {
                case "Chrome":
                    driver = new ChromeDriver();
                    break;
                case "Firefox":
                    driver = new FirefoxDriver();
                    break;
                case "IE":
                    driver = new InternetExplorerDriver();
                    break;
                default:
                    driver = new ChromeDriver();
                    break;
            }
            */
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(1);

        }

        [ClassCleanup]
        public static void TestFixtureTearDown()
        {
            driver.Quit();
        }

        public static IWebElement WaitUntilElementClickable(By elementLocator, int timeout = 120)
        {
            try
            {
                var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(timeout));
                return wait.Until(ExpectedConditions.ElementToBeClickable(elementLocator));
            }
            catch (NoSuchElementException)
            {
                Console.WriteLine("Element with locator: '" + elementLocator + "' was not found in current context page.");
                throw;
            }
        }




    }
}