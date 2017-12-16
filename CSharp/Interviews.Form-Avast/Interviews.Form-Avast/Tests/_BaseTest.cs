using Interviews.Form_Avast.Utilities;
using NUnit.Framework;

namespace Interviews.Form_Avast.Tests
{
    class BaseTest
    {
        [OneTimeSetUp]
        public void BeforeAllTests()
        {
			Log.StartOfFixture();
            Browser.CreateDriver();
			TestEnvironment.SelectEnvironment(TestEnvironment.Environment.Stage);
        }

        [SetUp]
        public void BeforeTest()
        {
			Log.StartOfTest();
        }

        [TearDown]
        public void AfterTest()
        {
			Log.EndOfTest();
			if(TestEnvironment.IsTestFailed())
				Screenshot.TakeScreenshot();
        }

        [OneTimeTearDown]
        public void AfterAllTests()
        {
		    Log.EndOfFixture();
            Browser.QuitDriver();
        }

    }
}
