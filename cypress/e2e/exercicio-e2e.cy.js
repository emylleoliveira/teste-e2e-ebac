/// <reference types="cypress" />
const perfil = require ('../fixtures/perfil.json')
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

      cy.login(perfil.usuario, perfil.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, emylle.teste (não é emylle.teste? Sair)')

        //Pedido de 4 produtos 
        cy.visit('produtos')

        cy.produtoCarrinho('Ariel Roll Sleeve Sweatshirt', '4')
        


        //Checkout

        cy.visit('/checkout')

        cy.preCadastro(faker.person.firstName(),faker.person.lastName(),faker.location.streetAddress(),faker.location.city(),'68120000','71985465212')
        

        
        //Validação da compra
        cy.get('#terms').check()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });
  

  


})