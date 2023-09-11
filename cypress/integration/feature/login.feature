Feature: Login

  Scenario: Login com sucesso
    Given o usuário está na página de login
    When o usuário preenche o login e a senha corretamente
    Then o usuário é redirecionado para a página de assinantes

