using Interviews.Form_Avast.PageObjects;
using NUnit.Framework;

namespace Interviews.Form_Avast.Tests
{
    class Testing : BaseTest
    {
        [Test]
        public void When_UserEnteresPassword_Expect_StrengthIndicatorShowsCorrectValue(
            [ValueSource(typeof(TestParameters), "GetPasswordStrengths")] PageObjects.RegistrationPage.PasswordStrength passStr)
        {
            var passwords = TestParameters.GetPasswords();
            var reg = new RegistrationPage().Open();

            reg.FillPasswords(passwords[(int)passStr]);
            Assert.True(reg.ComparePasswordStrength(passStr));
        }

        [Test]
        public void When_UserSubmitsFilledForm_Expect_ThankYouMassegeDisplayed()
        {
            var reg = new RegistrationPage().Open();
            reg.FillForm();
            reg.SubmitForm();
            Assert.Multiple(() =>
            {
                Assert.True(reg.GetThankYouMessage().Contains("Thank"));
                Assert.True(reg.IsThankYouDisplayed());
            });
        }

        [Test]
        public void When_UserDoesntFillName_Expect_ErrorMessageDisplayed()
        {
            var reg = new RegistrationPage().Open();
            reg.FillForm();
            reg.ClearFirstName();
            reg.SubmitForm();
            Assert.AreEqual(1, reg.GetNumberOfErrors());
            reg.FillFirstName();

            reg.ClearLastName();
            reg.SubmitForm();
            Assert.AreEqual(1, reg.GetNumberOfErrors());

            reg.ClearFirstName();
            Assert.AreEqual(1, reg.GetNumberOfErrors());

            reg.SubmitForm();
            Assert.AreEqual(1, reg.GetNumberOfErrors());
        }

        [Test]
        public void When_UserSubmitsEmptyform_Expect_SevenErrors()
        {
            var reg = new RegistrationPage().Open();
            reg.SubmitForm();
            Assert.AreEqual(7, reg.GetNumberOfErrors());
        }

        [Test]
        public void When_EmailFilled_Expect_OneLessMessage()
        {
            var reg = new RegistrationPage().Open();
            reg.SubmitForm();
            var count = reg.GetNumberOfErrors();

            reg.FillEmail();
            reg.SubmitForm();
            Assert.AreEqual(count, reg.GetNumberOfErrors() + 1);
        }

        [Test]
        public void When_PhoneFilled_Expect_OneLessMessage()
        {
            var reg = new RegistrationPage().Open();
            reg.SubmitForm();
            var count = reg.GetNumberOfErrors();

            reg.FillPhone();
            reg.SubmitForm();
            Assert.AreEqual(count, reg.GetNumberOfErrors() + 1);
        }

        [Test]
        public void When_UserNameFilled_Expect_OneLessMessage()
        {
            var reg = new RegistrationPage().Open();
            reg.SubmitForm();
            var count = reg.GetNumberOfErrors();

            reg.FillUsername();
            reg.SubmitForm();
            Assert.AreEqual(count, reg.GetNumberOfErrors() + 1);
        }
    }
}


