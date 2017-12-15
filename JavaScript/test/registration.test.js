import RegistrationPage from './pages/registration.page';
import { expect } from 'chai'; 

describe('registration page', () => {
    beforeEach(() => {
        RegistrationPage.open();  
    });

    it('strenght indicator is showing no strength by default', () => {      
        expect(RegistrationPage.comparePasswordStrength(0)).to.be.true;
    });
});