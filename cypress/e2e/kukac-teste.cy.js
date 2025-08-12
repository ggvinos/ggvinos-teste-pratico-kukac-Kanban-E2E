// Seletor centralizado para fácil manutenção
const selectors = {
  addListBtn: '.sc-jqUVSM',
  listInput: '.sc-gsnTZi',
  submitBtn: '.btn',
  cardContainer: '.board-cards',
  taskCard: '.sc-gKXOVf',
  addTagBtn: 'section > .custom-input > p',
  deleteListHeader: '.header',
  deleteListIcon: 'svg',
  themeSwitch: '.react-switch-bg',
  pageBody: 'body'
}

describe('Kanban E2E', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('Cria nova lista', () => {
    cy.get(selectors.addListBtn).click()
    cy.get(selectors.listInput).type('Nova Lista')
    cy.get(selectors.submitBtn).click()
  })

  it('Cria nova tarefa', () => {
    cy.get(selectors.addListBtn).click()
    cy.get(selectors.listInput).type('Lista para tarefa')
    cy.get(selectors.submitBtn).click()

    cy.get(selectors.cardContainer).last().click()
    cy.get(selectors.listInput).type('Nova Tarefa')
    cy.get(selectors.submitBtn).click()
  })

  it('Adiciona tag a uma tarefa', () => {
    cy.get(selectors.addListBtn).click()
    cy.get(selectors.listInput).type('Lista com tag')
    cy.get(selectors.submitBtn).click()

    cy.get(selectors.cardContainer).last().click()
    cy.get(selectors.listInput).type('Tarefa com tag')
    cy.get(selectors.submitBtn).click()

    cy.get(selectors.taskCard).last().click()
    cy.get(selectors.addTagBtn).click()
    cy.get(selectors.listInput).type('TagTeste 1')
    cy.get(selectors.submitBtn).click()

    cy.get(selectors.pageBody).click(0, 0)
  })

  it('Deleta lista', () => {
    cy.get(selectors.addListBtn).click()
    cy.get(selectors.listInput).type('Lista para deletar')
    cy.get(selectors.submitBtn).click()

    cy.get(selectors.deleteListHeader).last()
      .find(selectors.deleteListIcon)
      .click({ force: true })
  })

  it('Altera tema para claro e verifica cor', () => {
    cy.get('.react-switch-bg').click()
  cy.get(':nth-child(2) > .board-cards > .sc-gKXOVf') 
    .should('have.css', 'background-color', 'rgb(225, 232, 237)')
  })

  it.skip('Tentativa de deletar tarefa via hover (não funcionou)', () => {
    // cy.contains("Nova Tarefa").trigger("mouseover")
    // cy.get(tarefaNova).realHover()
    // cy.get('.trash').eq(13).click({ force: true });
    // o inserem no DOM apenas no mouseenter. Se for necessário automatizar:

    // Talvez seja necessario expor botão sempre (aria-hidden=false) ou data-cy
    // ou implementar um endpoint/test helper que exclua por API/localStorage
  });

  it.skip('Tentativa de mover tarefa para outra lista (não funcionou)', () => {
    // cy.get(':nth-child(3) > .board-cards > :nth-child(3)')
    //   .drag('.drop-list > :nth-child(4)');
    // Segundo algumas pesquisa o Drag and drop costuma falhar quando a lib usa events nativos complexos
    // Alternativas:
    // - usar plugin robusto e implementar um comando customizado que emula mousedown/mousemove/mouseup
    // - ou testar efeito do drag por API  ou testes unitários.
  });
})
