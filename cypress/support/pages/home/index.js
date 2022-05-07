const LOCATOR_HOME = require('../../../support/pages/home/elements').HOME

class HOME {
    static doSearchByName(search) {
        cy.get(LOCATOR_HOME.INPUT_SEARCH, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .type(search, { timeout: Cypress.env('timeout') })

        cy.get(LOCATOR_HOME.BTN_SEARCH, { timeout: Cypress.env('timeout') })
            .click()
    }

    static doTheSearchValidation(productName) {
        cy.validateUrl('/busca?query')

        cy.get(LOCATOR_HOME.DIV_FILTERS, { timeout: Cypress.env('timeout') })
            .should('be.visible')

        cy.get(LOCATOR_HOME.DIV_SIDE_BAR_FILTERS)
            .should('be.visible')

        cy.get(LOCATOR_HOME.DIV_YOU_SEARCH_FOR, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .and('contain', productName)

        cy.validateProductName(LOCATOR_HOME.DIV_NAME_PRODUCT, productName, { timeout: Cypress.env('timeout') })
    }

    static makeThePurchase(productName) {
        cy.get(LOCATOR_HOME.DIV_NAME_PRODUCT, { timeout: Cypress.env('timeout') })
            .eq(0)
            .should('be.visible')
            .click()

        cy.validateUrl('/produto')

        cy.validateProductName(LOCATOR_HOME.DIV_NAME, productName, { timeout: Cypress.env('timeout') })

        cy.get(LOCATOR_HOME.LABEL_IN_STOCK)
            .should('be.visible')
            .and('have.text', ' Em estoque')

        cy.get(LOCATOR_HOME.BTN_COMPRAR, { timeout: Cypress.env('timeout') })
            .click()
    }
}

export default HOME