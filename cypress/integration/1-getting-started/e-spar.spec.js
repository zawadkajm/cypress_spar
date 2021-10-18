describe('test e-spar', () => {
  
    it('wejdz na strone e-spar', () => {
        //obsługa pierwszego pop-upu
        cy.visit('https://e-spar.com.pl/')
        cy.get('#store_models_CurrentAddress_postcode_popup').should('have.length', 1).should('be.visible').type('05816')
        cy.get('#store_models_CurrentAddress_citySelectBoxItArrowContainer').click()
        cy.get('[data-val=Reguły]').click()
        cy.get('#postcode-complete').click()
        //obsługa drugiego pop-upu
        cy.get('#delivery-complete').click()
        //wyszukiwanie produktu
        cy.get('#query', {timeout: 10000}).should('have.length', 1).should('be.visible').type('mleko{enter}')
        // cy.get('#query', {timeout: 8000})
        // cy.get('#query', {timeout: 8000}).type('mleko')
    })

})