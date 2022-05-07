import { CART } from '../../../support/pages/sales-cart/elements'

const LOCATOR_CART = require('../../../support/pages/sales-cart/elements').CART

class SALES_CART {

    static validateThePreCart(productName) {
        cy.validateUrl('/precarrinho')

        cy.get(LOCATOR_CART.DIV_NAME_PRODUCT).should('contain', productName)

        cy.get(LOCATOR_CART.BTN_BACK)
            .should('be.visible')


        cy.get(LOCATOR_CART.BTN_GO_TO_CART, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .click()
    }

    static validateTheCart(productName) {
        cy.validateUrl('/carrinho')

        cy.get(LOCATOR_CART.STEP_CKO, { timeout: Cypress.env('timeout') })
            .should('be.visible')

        cy.get(LOCATOR_CART.CONTAINER_INFO, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .and('contain', productName)

        cy.get(LOCATOR_CART.BTN_GO_TO_PAYMENT, { timeout: Cypress.env('timeout') })
            .scrollIntoView()
            .should('be.visible', { timeout: Cypress.env('timeout') })
            .click()
    }

    static payByBankSlip() {

        cy.validateUrl('/pagamento')

        cy.get(LOCATOR_CART.STEP_CKO, { timeout: Cypress.env('timeout') })
            .should('be.visible')

        cy.get(CART.BTN_BANKSLIP, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .click()

        cy.get(CART.BTN_PAY, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .and('contain', 'PAGAR COM')
            .and('contain', 'BOLETO')
            .click()
    }

    static validateConfirmationScreen(nomeDoProduto) {
        cy.validateUrl('/confirmacao')

        cy.get(LOCATOR_CART.CONTAINER_INFO, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .and('contain', nomeDoProduto)
    }

    static cleanCart(){
        cy.get(LOCATOR_CART.BTN_CART_ICON, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .click()

        cy.get(LOCATOR_CART.BTN_REMOVE_ALL_PRODUCTS, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .click()

        cy.get(LOCATOR_CART.BTN_YES_MODAL, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .click()

        cy.get(LOCATOR_CART.LABEL_CAR_EMPTY, { timeout: Cypress.env('timeout') })
            .should('be.visible')
            .and('have.text', 'O seu carrinho está vazio.')
    }
}

export default SALES_CART