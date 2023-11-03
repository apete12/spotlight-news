describe('Test Search Functionality', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a2914f27be974de7b2a1b449a9c2cccd', {
        statusCode: 200,
        fixture: 'newsData.json'
      })
      .visit('http://localhost:3000/')
    });
  
    it('Should display search results on page', () => {
      cy.get('.search-wrapper')
      cy.get('#search')
   
      cy.get('input[name="search"]').type('bengals')
      cy.get('input[name="search"]').should('have.attr', 'value', 'bengals')
      cy.get('.submit-search').click()

      cy.get('.filtered-news-page')
      cy.get('.filtered-news-header').should('contain', 'Search Results: "bengals"')

      cy.get('.filtered-news-stories-wrapper').children().should('have.length', 1)
         cy.get('h2').should('contain', 'Cincinnati Bengals vs. San Francisco 49ers | 2023 Week 8 Game Highlights - NFL')

    });

    it('Should no results found message on page', () => {
        cy.get('.search-wrapper')
        cy.get('#search')
     
        cy.get('input[name="search"]').type('search')
        cy.get('input[name="search"]').should('have.attr', 'value', 'search')
        cy.get('.submit-search').click()
  
        cy.get('.filtered-news-page')
        cy.get('.filtered-news-header').should('contain', 'Search Results: "search"')
    
        cy.get('.no-results-container')
        cy.get('h2').should('contain', 'No stories match your search.')
  
      });
  

  })