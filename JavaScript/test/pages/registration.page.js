import ThankYou from './thank-you.page';

class Registration {
    // page elements
    get lastName() { return $("[name='last_name']"); }
    get firstName() { return $("[name='first_name']"); }
    get maritalStatus() { return $$(".radio_wrap input[type='radio']"); }
    get hobby() { return $$(".radio_wrap input[type='checkbox']"); }
    get country() { return $("#dropdown_7"); }
    get month() { return $("#mm_date_8"); }
    get day() { return $("#dd_date_8"); }
    get year() { return $("#yy_date_8"); }
    get phone() { return $("#phone_9"); }
    get username() { return $("#username"); }
    get email() { return $("[name='e_mail']"); }
    get picture() { return $("#profile_pic_10"); }
    get aboutYourself() { return $("#description"); }
    get password() { return $("#password_2"); }
    get confirmPassword() { return $("#confirm_password_password_2"); }
    get passwordStrength() { return $("#piereg_passwordStrength"); }
    get submit() { return $("[name='pie_submit']"); }

    /**
     * opens this page object in browser
     */
    open() {
        browser.url('/registration')
    }

    /**
     * compares class attribute and text of strength indicator
     * @param {Number} str number indicating the strength 0 (none) - 4 (strong)
     */
    comparePasswordStrength(str) {
        const strTexts = { 0: "Strength Indicator", 1: "Very weak", 2: "Weak", 3: "Medium", 4: "Strong" };
        const strClasses = { 0: "piereg_pass", 1: "piereg_pass_v_week", 2: "piereg_pass_week", 3: "piereg_pass_medium", 4: "piereg_pass_strong" };

        // indicator is not changing fast enough, it needs be tabed several times to show correct value
        // i vould report it as low priority and severity bug...
        // TODO: after fix of indicator reload, change this tabing maddnes
        this.password.addValue("\uE004");

        const sameText = strTexts[str] == this.passwordStrength.getText();
        const sameClass = strClasses[str] == this.passwordStrength.getAttribute('class');

        return sameText && sameClass;
    }

    fillForm() {

    }
}

export default new Registration();