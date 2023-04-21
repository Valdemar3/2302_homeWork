import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
import * as userLogining from '../fixtures/userLogining.json'
import RegistrationGUI from '../support/Pages/RegistrationGUI';
import AuthorizationGUI from '../support/Pages/AuthorizationGUI';

// userLogining.firstName = faker.name.firstName('female')
// userLogining.lastName = faker.name.lastName() 
// userLogining.email = faker.internet.email(userLogining.firstName, userLogining.lastName,'gmail.com', { allowSpecialCharacters: false })
// userLogining.address1 = faker.address.streetAddress()
// userLogining.city = faker.address.city()
// userLogining.postCode = faker.address.zipCode('####')
// userLogining.userName = faker.internet.userName(userLogining.firstName, userLogining.lastName)
// userLogining.pasw = faker.internet.password(4, true)

describe('Test suite for Automationstore.com', () => {
  it.skip('Registration', () => {

    RegistrationGUI.visitMainPage()
    RegistrationGUI.makeRegistrGui(userLogining)

    //console.log(userLogining)  //Using with Faker to know wich registration data it genered

  })

  it('AuthorizationGUI', () => {
    
    AuthorizationGUI.makeAuthorizGui(userLogining)

  })
})