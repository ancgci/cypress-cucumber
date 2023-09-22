import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('o usuário está na página de login', () => {
    cy.visit('https://www.saucedemo.com/');
  });
  
  When('o usuário preenche o login e a senha corretamente', () => {
    cy.get('input[data-test="username"]').type('standard_user');
    cy.get('input[data-test="password"]').type('secret_sauce');
  });
  
  When('clico no botão de login', () => {
    cy.get('[data-test="login-button"]').click();
  });
  
  Then('o usuário é redirecionado para a página de assinantes', () => {
    cy.url('https://www.saucedemo.com/').should('include', '/inventory.html')
  });
  
