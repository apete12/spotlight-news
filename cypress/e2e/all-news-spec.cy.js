describe('Test Home Page with All News Stories', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a2914f27be974de7b2a1b449a9c2cccd', {
      statusCode: 200,
      fixture: 'newsData.json'
    })
    .visit('http://localhost:3000/')
  });

  it('should display header', () => {
    cy.get('.header')
    cy.get('.app-title')
      .should('contain', 'News Spotlight')
  });

  it('should display news story  cards', () => {
    cy.get('.all-news-wrapper').children().should('have.length', 3)
    cy.get('section > :nth-child(1)')
    cy.get('h2').should('contain', 'Israel-Hamas war live updates: Thousands break into UN warehouses in Gaza; satellite images show destruction in Gaza - CNBC')
    cy.get('h3')

    cy.get('section > :nth-child(2)')
    cy.get('h2').should('contain', 'Cincinnati Bengals vs. San Francisco 49ers | 2023 Week 8 Game Highlights - NFL')
    cy.get('h3')
    
  });
})