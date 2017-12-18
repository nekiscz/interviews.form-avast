import RegistrationPage from './pages/registration.page';
import { expect } from 'chai';

describe('registration page', () => {
    beforeEach(() => {
        RegistrationPage.open();
    });

    it('strenght indicator is showing no strength by default', () => {
        expect(RegistrationPage.comparePasswordStrength(0)).to.be.true;
    });

    it('strenght indicator has correct text and class for different passwords', () => {
        const passwords = ['123', '1asd45fgh6', 'as369d741lok', 'Mas#159oLp*']

        for (let index = 0; index < passwords.length; index++) {
            RegistrationPage.password.setValue(passwords[index])

            const value = browser.waitUntil(() => {
                return RegistrationPage.comparePasswordStrength(index + 1)
            }, 3000, 'expected class and text change after 1s')

            expect(value).to.be.true;
        }
    });

    it.only('empty first and/or last name fields show error message', () => {
        RegistrationPage.fillForm();
        
        RegistrationPage.clearFirstName();
        RegistrationPage.submitForm();
        expect(RegistrationPage.getNuberOfErrors(), 'no error message shown when first name is empty').to.be.eql(1);
        RegistrationPage.fillFirstName();

        RegistrationPage.clearLastName();
        RegistrationPage.submitForm();
        expect(RegistrationPage.getNuberOfErrors(), 'no error message shown when last name is empty').to.be.eql(1);
        RegistrationPage.clearFirstName();
        expect(RegistrationPage.getNuberOfErrors(), 'no error message shown after clearing both name fields').to.be.eql(1);
        RegistrationPage.submitForm();
        expect(RegistrationPage.getNuberOfErrors(), 'no error message shown when both names are empty').to.be.eql(1);
    });

    it('after submitting form thank you page is displayed', () => {
        RegistrationPage.fillForm();
        RegistrationPage.submitForm();
        expect(RegistrationPage.getThankYouMessage(),'thank you message had incorrect text').to.contain('Thank');
    });

    it('seven fields are required to fill', () => {
        RegistrationPage.submitForm();
        expect(RegistrationPage.getNuberOfErrors(), 'seven error messages was expected on page').to.be.eql(7);
    });

    it('when email is not filled, error is displayed', () => {
        RegistrationPage.submitForm();
        const empty = RegistrationPage.getNuberOfErrors();

        RegistrationPage.fillEmail();
        RegistrationPage.submitForm();
        expect(empty, 'empty email field doent add error message').to.be.eql(RegistrationPage.getNuberOfErrors() + 1);       
    });

    it('when phone is not filled, error is displayed', () => {
        RegistrationPage.submitForm();
        const empty = RegistrationPage.getNuberOfErrors();

        RegistrationPage.fillPhone();
        RegistrationPage.submitForm();
        expect(empty, 'empty phone field doent add error message').to.be.eql(RegistrationPage.getNuberOfErrors() + 1);       
    });

    it('when username is not filled, error is displayed', () => {
        RegistrationPage.submitForm();
        const empty = RegistrationPage.getNuberOfErrors();

        RegistrationPage.fillUsername();
        RegistrationPage.submitForm();
        expect(empty, 'empty username field doent add error message').to.be.eql(RegistrationPage.getNuberOfErrors() + 1);       
    });
});