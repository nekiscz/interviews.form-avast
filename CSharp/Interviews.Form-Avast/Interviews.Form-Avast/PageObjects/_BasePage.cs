using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;

namespace Interviews.Form_Avast.PageObjects
{
    class BasePage
    {
        [FindsBy(How = How.TagName, Using = "html")]
        public IWebElement html { get; set; }

        public BasePage()
        {
            PageFactory.InitElements(Browser.Driver, this);
        }

    }
}
