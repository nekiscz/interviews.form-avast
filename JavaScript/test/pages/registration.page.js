import Base from './base.page';
import path from 'path';

class Registration extends Base {
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
    get errorMessages() { return $$(".fieldset.error"); }
    get thankYouMessage() { return $(".piereg_message"); }

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
        // i would report it as low priority and severity bug...
        // TODO: after fix of indicator reload, change this tabing maddnes
        this.password.addValue("\uE004");

        const sameText = strTexts[str] == this.passwordStrength.getText();
        const sameClass = strClasses[str] == this.passwordStrength.getAttribute('class');

        return sameText && sameClass;
    }

    /**
     * fills whole form
     */
    fillForm() {
        this.fillFirstName();
        this.fillLastName();
        this.maritalStatus[this.getRandomNumber(0, this.maritalStatus.length)].click();
        this.fillHobby();
        this.country.selectByValue('Czech Republic');
        this.month.selectByValue('2');
        this.day.selectByValue('31');
        this.year.selectByValue('2000');
        this.fillPhone();
        this.fillUsername();
        this.fillEmail();
        this.picture.addValue(path.join(__dirname, "..", "testfiles", "profile-image.png"));
        this.aboutYourself.setValue(this.loremipsum);
        this.password.setValue('asd123456');
        this.confirmPassword.setValue('asd123456');
    }

    /**
     * fills last name field
     */
    fillLastName() {
        this.lastName.setValue('test-lastname\uE004');
    }

    /**
     * fills first name field
     */
    fillFirstName() {
        this.firstName.setValue('test-firstname\uE004');
    }

    /**
     * fills email field
     */
    fillEmail() {
        this.email.setValue(`${this.getRandomString(7)}@email.com`);
    }

    /**
     * fills phone field
     */
    fillPhone() {
        this.phone.setValue('00420603603603');
    }

    /**
     * fills username field
     */
    fillUsername() {
        this.username.setValue(this.getRandomString(7));
    }

    /**
     * randomly clicks on one of hobbys' checkboxes 
     */
    fillHobby() {
        this.hobby[this.getRandomNumber(0, this.hobby.length)].click();
    }

    /**
     * clears last name field
     */
    clearLastName() {
        this.lastName.clearElement();
    }

    /**
     * clears first name field
     */
    clearFirstName() {
        this.firstName.clearElement();
    }

    /**
     * waits a 100ms and returns number of messages in DOM
     */
    getNuberOfErrors() {
        browser.pause(100);
        return this.errorMessages.length;
    }

    /**
     * clicks submit button
     */
    submitForm() {
        this.submit.click();
    }

    /**
     * gets text of thank you message
     */
    getThankYouMessage() {
        return this.thankYouMessage.getText();
    }
}

export default new Registration();