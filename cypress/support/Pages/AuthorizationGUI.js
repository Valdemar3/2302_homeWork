class AuthorizationGUI {
    visitMainPage() { cy.visit('/') }

    findRegistField() { return cy.get('a:contains("Login or register")') }

    findInputLoginName() { return cy.get('#loginFrm_loginname') }

    findPasw() { return cy.get('#loginFrm_password') }

    findButtonLoginI() { return cy.get('button:contains("Login")')}

    checkIfSuccess() { return cy.get('span.subtext')}

    makeAuthorizGui(userLogining) {
        
        cy.log('**Visit Main Page**')
        this.visitMainPage()
        
        cy.log('**Go to LogIn Page**')
        this.findRegistField().click()

        cy.log('**Fillin Authorization datas**')
        this.findInputLoginName().type(userLogining.userName)
        this.findPasw().type(userLogining.pasw)
        this.findButtonLoginI().click()

        cy.log('**Checkig Success**')
        this.checkIfSuccess().contains('Leona')

    }
}
export default new AuthorizationGUI()