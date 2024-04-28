/// <reference types="cypress" />
import { PhoneModule, faker } from '@faker-js/faker';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/minha-conta/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações

      //Login

      cy.login('emylle.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, emylle.teste (não é emylle.teste? Sair)')

        //Pedido de 4 produtos 
        cy.visit('produtos')
        cy.get('.products >.row')
        .contains ('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-XS') .click()
        cy.get('.button-variable-item-Red') .click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()


        //Checkout

        cy.visit('/checkout')
        cy.get('#billing_first_name').type(faker.person.firstName())
        cy.get('#billing_last_name').type(faker.person.lastName())
        cy.get('#billing_address_1').type(faker.location.streetAddress())
        cy.get('#billing_city').type(faker.location.city())
        cy.get('#billing_postcode').clear().type(68120000)
        cy.get('#billing_phone').clear().type('71985465212')
        cy.get('#payment_method_cod').click()

        
        //Validação da compra
        cy.get('#terms').check()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });
  

  


})