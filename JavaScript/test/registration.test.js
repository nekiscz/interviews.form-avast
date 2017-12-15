import RegistrationPage from './pages/registration.page';
import { expect } from 'chai'; 

describe('registration page', () => {
    it('name elements exist', () => {      
        RegistrationPage.open();
        RegistrationPage.lastName.setValue('name');
        expect(RegistrationPage.lastName.getAttribute('value')).to.be.eql('name');
    })
})