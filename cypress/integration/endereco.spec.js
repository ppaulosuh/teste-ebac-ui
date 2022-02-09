/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Victor', 'Soares', 'INDRA', 'Brasil', 'QD 203', '12', 'Total Ville', 'Distrito Federal', '72583-200', '61993337000', 'email@testando.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
    it('Deve fazer cadastro de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Flavio', 'Corrêa', 'Correios', 'Brasil', 'Rua 32', 'Quadra 37', 'Luziania', 'Goiás', '70040901')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
it('Deve fazer cadastro de entrega com sucesso - Usando aquivos de dados', () => {
    EnderecoPage.editarEnderecoEntrega(
        dadosEndereco[2].nome,
        dadosEndereco[2].sobrenome,
        dadosEndereco[2].empresa,
        dadosEndereco[2].pais,
        dadosEndereco[2].endereco,
        dadosEndereco[2].endereco2,
        dadosEndereco[2].cidade,
        dadosEndereco[2].estado,
        dadosEndereco[2].cep
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
});
});