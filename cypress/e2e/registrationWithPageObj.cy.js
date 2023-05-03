import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
import * as userLogining from '../fixtures/userLogining.json'
import RegistrationGUI from '../support/Pages/RegistrationGUI';
import AuthorizationGUI from '../support/Pages/AuthorizationGUI';
import AuthorizationSilent from '../support/Pages/AuthorizationSilent';

// userLogining.firstName = faker.name.firstName('female')
// userLogining.lastName = faker.name.lastName() 
// userLogining.email = faker.internet.email(userLogining.firstName, userLogining.lastName,'gmail.com', { allowSpecialCharacters: false })
// userLogining.address1 = faker.address.streetAddress()
// userLogining.city = faker.address.city()
// userLogining.postCode = faker.address.zipCode('####')
// userLogining.userName = faker.internet.userName(userLogining.firstName, userLogining.lastName)
// userLogining.pasw = faker.internet.password(4, true)

describe('Test suite for Automationstore.com', () => {
  it('Registration', () => {

    RegistrationGUI.visitMainPage()
    RegistrationGUI.makeRegistrGui(userLogining)

    //console.log(userLogining)  //Using with Faker to know wich registration data it genered

  })

  it('AuthorizationGUI', () => {
    
    AuthorizationGUI.makeAuthorizGui(userLogining)

  })

  it('AuthorizationSilent', ()=> {

    AuthorizationSilent.makeSilentAuthoriz(userLogining)

    cy.visit('/index.php?rt=account/account')
    cy.log('**Verify user**')
    cy.get('h1 span.subtext', {timeout: 20000}).should('contain', userLogining.firstName)

  })

})
