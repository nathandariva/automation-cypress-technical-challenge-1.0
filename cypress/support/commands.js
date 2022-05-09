Cypress.Commands.add('validateUrl', (url) => {
    cy.url()
        .should('contain', url, { timeout: Cypress.env('timeout') })
})

Cypress.Commands.add('validateProductName', (locator, search) => {
    cy.get(locator)
        .then(element => {
            let nameProduct = element[0].innerText

            expect(nameProduct).contains(search)
        })
})
