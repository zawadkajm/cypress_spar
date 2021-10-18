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
        // 1
        cy.get('#query', {timeout: 10000}).should('have.length', 1).should('be.visible').type('mleko{enter}')
        cy.get('.product-form-290982 > .product-box__buttons > .basket > .add-to-cart').should('be.visible').click()
        // 2
        cy.get('#query').should('be.visible').clear()
        cy.get('#query', {timeout: 10000}).should('have.length', 1).should('be.visible').type('ser{enter}')
        cy.get('.product-form-221159 > .product-box__buttons > .basket > .add-to-cart').should('be.visible').click()
        cy.get('.product-form-221159 > .product-box__buttons > .product-edit > .product-unit > .unit-sl').should('be.visible').click()
        cy.get('.product-form-221159 > .product-box__buttons > .product-edit > .product_quantity__wrapper > .product-amount-input').type('{selectall}3')
        // przejscie do koszyka
        cy.get('.top-search__right > .open-cart').should('be.visible').click()
        cy.get('#finalize-shopping').should('be.visible').click()
        cy.get('.buttons > .total-price3 > .btn').should('be.visible').click()
        // dane adresowe
        cy.get('#delivery > :nth-child(2) > label').should('be.visible').click()
        cy.get('.col-lg-9 > :nth-child(6) > label').should('be.visible').click()
        cy.get('#store_models_StoreClientAddress_firstname').type('Urząd Gminy')
        cy.get('#store_models_StoreClientAddress_lastname').type('Michałowice')
        
    })

})