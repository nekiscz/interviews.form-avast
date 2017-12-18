using Interviews.Form_Avast.Utilities;
using System.Collections.Generic;
using System.Configuration;
using static Interviews.Form_Avast.PageObjects.RegistrationPage;

namespace Interviews.Form_Avast.Tests
{
    class TestParameters
    {
        /// <summary>
        /// Fetches passwords set in app config
        /// </summary>
        /// <returns></returns>
        public static string[] GetPasswords()
        {
            return ConfigurationManager.AppSettings["testpasswords"].Split(';');
        }

        /// <summary>
        /// Gets different password leveles
        /// </summary>
        /// <returns></returns>
        public static IList<PasswordStrength> GetPasswordStrengths()
        {
            return EnumHelper.GetList<PasswordStrength>();
        }
    }
}
