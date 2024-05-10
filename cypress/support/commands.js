Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('preCadastro', (nome, sobrenome, endereço, cidade,cep, numero)=>{
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_address_1').type(endereço)
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(numero)
    cy.get('#payment_method_cod').click()
})

Cypress.Commands.add('produtoCarrinho', (blusa, unidade)=>{
        cy.get('.products >.row')
        .contains (blusa).click()
        cy.get('.button-variable-item-XS') .click()
        cy.get('.button-variable-item-Red') .click()
        cy.get('.input-text').clear().type(unidade)
        cy.get('.single_add_to_cart_button').click()
})