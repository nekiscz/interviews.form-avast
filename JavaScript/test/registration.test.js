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

});