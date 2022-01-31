/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt”')

    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'XS', 'Yellow', 2)
    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'S', 'Green', 1)
    });
})