
describe('Login', () => {
  it('o usuário está na página de login', () => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('o usuário preenche o login e a senha corretamente', () => {
     cy.visit('https://www.saucedemo.com/')
     // Preenche o usuario
     cy.get('[data-test="username"]').type('standard_user');
     // Preenche a senha
     cy.get('[data-test="password"]').type('secret_sauce');
     cy.get('[data-test="login-button"]').click();
  })

  it('o usuário é redirecionado para a página de assinantes', () => {
    // Verifica se a página inicial está sendo exibida
    cy.visit('https://www.saucedemo.com/')
     // Preenche o email
     cy.get('[data-test="username"]').type('standard_user');
     // Preenche a senha
     cy.get('[data-test="password"]').type('secret_sauce');
     cy.get('[data-test="login-button"]').click();
    cy.url('https://www.saucedemo.com/').should('include', '/inventory.html')
  })
})



