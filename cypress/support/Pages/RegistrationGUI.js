class RegistrationGUI {
    visitMainPage() {cy.visit('/')}
    
    findRegistField() { return cy.get('a:contains("Login or register")') }

    chooseRegistField() { return cy.get('button[title="Continue"]') }

    fillInFirstName() { return cy.get('#AccountFrm_firstname') }

    fillInLastName(){ return cy.get('#AccountFrm_lastname') }
    
    fillInEmail() {return cy.get('#AccountFrm_email') }
    
    fillInAddress1() { return cy.get('#AccountFrm_address_1') }

    fillInCountry() { return cy.get('#AccountFrm_country_id')}
    
    fillInZone()  { return cy.get('#AccountFrm_zone_id') }

    fillInCity() { return cy.get('#AccountFrm_city') }

    fillInPostCode() { return cy.get('#AccountFrm_postcode') }
    
    fillInUserName() { return cy.get('#AccountFrm_loginname') }

    fillInPasw() { return cy.get('#AccountFrm_password') }
    
    fillInConfirmPasw() { return cy.get('#AccountFrm_confirm') }

    checkAgreement() { return cy.get('#AccountFrm_agree') }
    
    getSumbmitForm() { return cy.get('button.btn.btn-orange.pull-right') }

    checkIfUserLoggedIn() { return cy.get('div.menu_text') }

    logOut() { return cy.get('.side_account_list .fa.fa-lock.fa-fw') } 
    //cy.get('#customer_menu_top ul.sub_menu li.dropdown').last().click()
    showInConsole() {
        console.log() // showing in console registarion data from faker to import them in Fixures
    }

    makeRegistrGui(userLogining) {
        cy.log('**Registration function Page**')
        this.visitMainPage()

        cy.log('**Search Login form and Register**')
        this.findRegistField().click()

        cy.log('**Choose Registaration**')
        this.chooseRegistField().click()

        cy.log('**Fill in inputs and other registation informantion**')
        this.fillInFirstName().type(userLogining.firstName)
        this.fillInLastName().type(userLogining.lastName)
        this.fillInEmail().type(userLogining.email)
        this.fillInAddress1().type(userLogining.address1)
        this.fillInCountry().then(el => {
            cy.wrap(el).select(userLogining.country, {force:true})
                .should('have.value', '124')
        })
        this.fillInZone().then (el => {
            cy.wrap(el).select(userLogining.country, {force:true})
                .should('have.value', '1929')
        })
        
        this.fillInCity().type(userLogining.city)
        this.fillInPostCode().type(userLogining.postCode)
        this.fillInUserName().type(userLogining.userName)
        this.fillInPasw().type(userLogining.pasw)
        this.fillInConfirmPasw().type(userLogining.pasw)
        this.checkAgreement().check()
        this.getSumbmitForm().click()

        cy.log('**Check User is LoggedIn after Registation**')
        this.checkIfUserLoggedIn().should('contain', userLogining.firstName)
        this.logOut().click()

    }
} 
export default new RegistrationGUI()