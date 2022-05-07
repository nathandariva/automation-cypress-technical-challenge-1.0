/// <reference types="cypress" />

import LOGIN from '../../support/pages/login/index'
const LOCATOR_CART = require('../../support/pages/sales-cart/elements').CART

describe('Login', () => {
    it('Should validate the login successfully', () => {
        LOGIN.doLogin(Cypress.env('email'), Cypress.env('senha'), true) 
        cy.get(LOCATOR_CART.BTN_CART_ICON, { timeout: Cypress.env('timeout') })
            .should('be.visible')

    });

    it('Should validate the visibility of error messages', () => {
        let msg1= 'Estamos com problemas, tente mais tarde'
        let msg2= 'Não foi possivel realizar o login'

        const wrong_scenarios = [
            {
                email: '123',
                password: 'a',
                msgError: msg1,
                acceptCookies: true
            },
            {
                email: 'teste',
                password: '1',
                msgError: msg1,
                acceptCookies: false
            },
            {
                email: 'teste@@.com',
                password: '199999999999999999999999999999999999999999999999999999',
                msgError: msg1,
                acceptCookies: false
            },
            {
                email: Cypress.env("email"),
                password: 'wrongPwd',
                msgError: msg2,
                acceptCookies: false
            }
        ]

        wrong_scenarios.map(fill => {
            
            LOGIN.doLogin(fill.email, fill.password, fill.acceptCookies)
            cy.get('.inputForm + div')
            .should('be.visible')
            .and('contain', fill.msgError)
        })

        cy.reload()
    });
})