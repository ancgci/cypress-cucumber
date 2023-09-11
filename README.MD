# Projeto de Testes com Cypress e Cucumber

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=%20Em%20desenvolvimento&color=GREEN&style=for-the-badge)

## _Teste Automático e2e

Projeto de [teste de software automático](https://github.com/ancgci/Cypress-diretoaoponto) para fins educacionais em pratica da formação para Analista de Testes de Software. 
Este é um projeto de testes automatizados utilizando Cypress e Cucumber para testar a funcionalidade de login com sucesso de uma aplicação web.

## Tecnologias utilizadas

- Cypress
- Node
- JavaScript
- Cucumber
- 

## Pré-requisitos

Antes de rodar os testes, certifique-se de que você tenha o seguinte instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 

## Instalação

1. Clone o repositório: 

- git clone https://github.com/seu-usuario/nome-do-repositorio.git


2. Navegue até a pasta do projeto:

- cd nome-do-repositorio

3. Instale as dependências:

npm install

4. Executando os Testes

Para executar os testes, você pode usar o seguinte comando:

´´npx cpress run'' ou ´´npx cpress open´´

Este comando irá iniciar o Cypress e executar os cenários de teste definidos no arquivo `login.cy.js` localizado em `cypress/e2e`.

## Como os Testes foram Organizados

Os testes foram organizados usando o formato Gherkin do Cucumber, que permite escrever cenários de teste de forma legível para não técnicos. Os arquivos `.feature` estão localizados em `cypress/integration`.

### Exemplo de Cenário:

```gherkin
Feature: Login

Scenario: Login com sucesso
    Given o usuário está na página de login
    When o usuário preenche o login e a senha corretamente
    Then o usuário é redirecionado para a página de assinantes

```

## Imagens 

![1](https://github.com/ancgci/cypress-cucumber/blob/main/imagens/1.png)
![2](https://github.com/ancgci/cypress-cucumber/blob/main/imagens/2.png)
![3](https://github.com/ancgci/cypress-cucumber/blob/main/imagens/3.png)
![4](https://github.com/ancgci/cypress-cucumber/blob/main/imagens/4.png)

## License

MIT
