Feature: Shopping Test

  Scenario: Adicionar produtos no carrinho
    Given o usuário está na página de compras
    When o usuário clicar em adicionar itens
    And clica no carrinho de compras
    Then o usuário é redirecionado para a página do carrinho de compras