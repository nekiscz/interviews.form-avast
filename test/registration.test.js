import RegistrationPage from './pages/registration.page';
import { expect } from 'chai'; 
import Registration from './pages/registration.page';

describe('registration page', () => {
    it('name elements exist', () => {      
        RegistrationPage.open();
        RegistrationPage.lastName.setValue('name');
    })
})