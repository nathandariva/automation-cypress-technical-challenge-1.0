const LOCATOR_LOGIN = require('../../../support/pages/login/elements').LOGIN
const LOCATOR_HOME = require('../../../support/pages/home/elements').HOME

class LOGIN {
    static doLogin(email, password, acceptCookies) {  

        cy.visit('https://www.kabum.com.br/login')

        if(acceptCookies == true){
            cy.get(LOCATOR_HOME.BTN_ACCEPT_COOKIES, { timeout: Cypress.env('timeout') })
                .click()
        }

        cy.get(LOCATOR_LOGIN.INPUT_EMAIL)
            .should('be.visible')
            .clear()
            .type(email)

        cy.get(LOCATOR_LOGIN.INPUT_PASSWORD)
            .should('be.visible')
            .clear()
            .type(password)

        cy.get(LOCATOR_LOGIN.BTN_LOGIN).click()
    }
}

export default LOGIN