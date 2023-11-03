describe('Test Home Page with All News Stories', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a2914f27be974de7b2a1b449a9c2cccd', {
        statusCode: 200,
        fixture: 'newsData.json'
      })
      .visit('http://localhost:3000/')
    });
  
  
    it('Should display page with news story details', () => {
        cy.get('[href="/Cincinnati Bengals vs. San Francisco 49ers | 2023 Week 8 Game Highlights - NFL"] > .news-card-wrapper > .news-card').click()

        cy.url('should', 'eq', 'http://localhost:3000/Cincinnati%20Bengals%20vs.%20San%20Francisco%2049ers%20%7C%202023%20Week%208%20Game%20Highlights%20-%20NFL')

        cy.get('.single-story-page')
        cy.get('.details-container')
        cy.get('h2').should('contain', 'Cincinnati Bengals vs. San Francisco 49ers | 2023 Week 8 Game Highlights - NFL')
        cy.get('.details-container > :nth-child(2)').should('contain', 'Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...')
        cy.get('.details-container > :nth-child(3)').should('contain', 'Article Published: October 29, 2023 4:02:33 AM UTC')
    });

  })