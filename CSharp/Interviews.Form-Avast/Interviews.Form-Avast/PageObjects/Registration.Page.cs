using Interviews.Form_Avast.Utilities;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;
using System.Collections.Generic;

namespace Interviews.Form_Avast.PageObjects
{
    partial class RegistrationPage : BasePage
    {
        #region Variables
        /// <summary>
        /// Different strength levels
        /// </summary>
        public enum PasswordStrength
        {
            None,
            VeryWeek,
            Week,
            Medium,
            Strong
        }

        private readonly Dictionary<PasswordStrength, string> IndicatorTexts = new Dictionary<PasswordStrength, string>
            {
                { PasswordStrength.None, "Strength Indicator"},
                { PasswordStrength.VeryWeek, "Very weak"},
                { PasswordStrength.Week, "Weak"},
                { PasswordStrength.Medium, "Medium"},
                { PasswordStrength.Strong, "Strong"}
            };

        private readonly Dictionary<PasswordStrength, string> IndicatorClasses = new Dictionary<PasswordStrength, string>
            {
                { PasswordStrength.None, "piereg_pass"},
                { PasswordStrength.VeryWeek, "piereg_pass_v_week"},
                { PasswordStrength.Week, "piereg_pass_week"},
                { PasswordStrength.Medium, "piereg_pass_medium"},
                { PasswordStrength.Strong, "piereg_pass_strong"}
            };

        #endregion

        #region Page Elements

        [FindsBy(How = How.Name, Using = "last_name")]
        private IWebElement LastName { get; set; }

        [FindsBy(How = How.Name, Using = "first_name")]
        private IWebElement FirstName { get; set; }

        [FindsBy(How = How.CssSelector, Using = ".radio_wrap input[type='radio']")]
        private IList<IWebElement> MaritalStatus { get; set; }

        [FindsBy(How = How.CssSelector, Using = ".radio_wrap input[type='checkbox']")]
        private IList<IWebElement> Hobby { get; set; }

        [FindsBy(How = How.Id, Using = "dropdown_7")]
        private IWebElement Country { get; set; }

        [FindsBy(How = How.Id, Using = "mm_date_8")]
        private IWebElement Month { get; set; }

        [FindsBy(How = How.Id, Using = "dd_date_8")]
        private IWebElement Day { get; set; }

        [FindsBy(How = How.Id, Using = "yy_date_8")]
        private IWebElement Year { get; set; }

        [FindsBy(How = How.Id, Using = "phone_9")]
        private IWebElement Phone { get; set; }

        [FindsBy(How = How.Id, Using = "username")]
        private IWebElement UserName { get; set; }

        [FindsBy(How = How.Name, Using = "e_mail")]
        private IWebElement Email { get; set; }

        [FindsBy(How = How.Id, Using = "profile_pic_10")]
        private IWebElement ProfilePicture { get; set; }

        [FindsBy(How = How.Id, Using = "description")]
        private IWebElement Description { get; set; }

        [FindsBy(How = How.Id, Using = "password_2")]
        private IWebElement Password { get; set; }

        [FindsBy(How = How.Id, Using = "confirm_password_password_2")]
        private IWebElement ConfirmPassword { get; set; }

        [FindsBy(How = How.Id, Using = "piereg_passwordStrength")]
        private IWebElement PasswordStrengthIdicator { get; set; }

        [FindsBy(How = How.Name, Using = "pie_submit")]
        private IWebElement Submit { get; set; }

        [FindsBy(How = How.CssSelector, Using = ".fieldset.error")]
        private IList<IWebElement> ErrorMessages { get; set; }

        [FindsBy(How = How.ClassName, Using = "piereg_message")]
        private IWebElement ThankYouMessage { get; set; }

        #endregion

        public RegistrationPage()
        {
            PageFactory.InitElements(Browser.Driver, this);
        }

        public RegistrationPage Open()
        {
            Browser.GoToUrl("/registration");
            return this;
        }

        /// <summary>
        /// Compares text and class of strength indicator
        /// </summary>
        /// <param name="str">Supposed strength</param>
        /// <returns>True if both same</returns>
        public bool ComparePasswordStrength(PasswordStrength str)
        {
            var isCorrect = false;
            // indicator is not changing fast enough, it needs be tabed several times to show correct value
            // i would report it as low priority and severity bug...
            // TODO: after fix of indicator reload, change this tabing maddness
            return Browser.Wait.Until(d =>
            {
                this.Password.SendKeys(Keys.Tab);

                var isSameText = IndicatorTexts[str] == this.PasswordStrengthIdicator.Text;
                var isSameClass = IndicatorClasses[str] == this.PasswordStrengthIdicator.GetAttribute("class");

                isCorrect = isSameClass && isSameText;
                return isCorrect;
            });
        }

        /// <summary>
        /// Gets nubmer of errors in DOM
        /// </summary>
        public int GetNumberOfErrors()
        {
            return this.ErrorMessages.PlainWait(100).Count;
        }

        /// <summary>
        /// Gets thank you message text
        /// </summary>
        /// <returns></returns>
        public string GetThankYouMessage()
        {
            return this.ThankYouMessage.GetText();
        }

        /// <summary>
        /// Checks if thank you message is displayed
        /// </summary>
        /// <returns></returns>
        public bool IsThankYouDisplayed()
        {
            return this.ThankYouMessage.IsDisplayed();
        }

        #region Fill and Clear Methods

        /// <summary>
        /// Fills first name
        /// </summary>
        public void FillFirstName()
        {
            this.FirstName.EnterText("test-firstname" + Keys.Tab);
        }

        /// <summary>
        /// Clears first name field
        /// </summary>
        public void ClearFirstName()
        {
            this.FirstName.ClearElement();
        }

        /// <summary>
        /// Fills last name
        /// </summary>
        public void FillLastName()
        {
            this.LastName.EnterText("test-lastname" + Keys.Tab);
        }

        /// <summary>
        /// Clears last name field
        /// </summary>
        public void ClearLastName()
        {
            this.FirstName.ClearElement();
        }

        /// <summary>
        /// Fills email field
        /// </summary>
        public void FillEmail()
        {
            this.Email.EnterText($"{StringHelper.RandomString(7)}@email.com");
        }

        /// <summary>
        /// Fills phone field
        /// </summary>
        public void FillPhone()
        {
            this.Phone.EnterText("00420603603603");
        }

        /// <summary>
        /// Fills random string as username
        /// </summary>
        public void FillUsername()
        {
            this.UserName.EnterText(StringHelper.RandomString(7));
        }

        /// <summary>
        /// Clicks one of the hobby checkboxes
        /// </summary>
        public void FillHobby()
        {
            this.Hobby.ClickRandomElement();
        }

        /// <summary>
        /// Fills password and confirm password fields
        /// </summary>
        /// <param name="pass">Password to be filled</param>
        public void FillPasswords(string pass)
        {
            this.Password.EnterText(pass);
            this.ConfirmPassword.EnterText(pass);
        }

        /// <summary>
        /// Fills whole form
        /// </summary>
        public void FillForm()
        {
            FillFirstName();
            FillLastName();
            this.MaritalStatus.ClickRandomElement();
            FillHobby();
            this.Month.SelectRandomElement();
            this.Day.SelectRandomElement();
            this.Year.SelectRandomElement();
            FillPhone();
            FillUsername();
            FillEmail();
            this.ProfilePicture.EnterFile(@"Data\profile-image.png");
            this.Description.EnterFile(Lorem.Paragraph(3));
            FillPasswords("asd123456");
        }
        
        #endregion

        /// <summary>
        /// Clicks on submit button
        /// </summary>
        public void SubmitForm()
        {
            this.Submit.ClickElement();
        }
    }
}
