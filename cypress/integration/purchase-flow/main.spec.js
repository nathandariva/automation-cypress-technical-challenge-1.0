/// <reference types="cypress" />
import HOME from '../../support/pages/home/index'
import LOGIN from '../../support/pages/login/index'
import SALES_CART from '../../support/pages/sales-cart/index'
const LOCATOR_LOGIN = require('../../support/pages/login/elements').LOGIN

describe('Flow purchase - Kabum', () => {

    it('Must validate the e-commerce purchase flow', () => {
        const searchProduct = [
            {
                name: 'Boneco Funko Pop The Simpsons Homer Belly',
                frete: false,
            },
            {
                name: 'Google Nest Mini, Carvão',
                frete: true,
            }
        ]


        LOGIN.doLogin(Cypress.env('email'), Cypress.env('senha'), true)

        cy.get(LOCATOR_LOGIN.BTN_CLOSE_MODAL, { timeout: Cypress.env('timeout') })
            .click()

        searchProduct.map(product => {
            cy.validateUrl('kabum.com.br', { timeout: Cypress.env('timeout') })

            HOME.doSearchByName(product.name)

            HOME.doTheSearchValidation(product.name)

            HOME.makeThePurchase(product.name)

            SALES_CART.validateThePreCart(product.name)

            if (product.frete == true) {
                cy.get('.shippingContainer input[value="28"]')
                    .should('be.visible')
                    .click()
            }

            SALES_CART.validateTheCart(product.name)

            SALES_CART.payByBankSlip()

            SALES_CART.validateConfirmationScreen(product.name)

            cy.get('#logoKabum').click()
        })

        SALES_CART.cleanCart()

    });
});