describe("Fuel Savings:", () => {

    it("Inputs zero in New Vehicle MPG field", () => {
        cy.visit('/fuel-savings')
        cy.get('input[name="newMpg"]').type('0')
        cy.get('input[name="tradeMpg"]').type('1')
        cy.get('input[name="newPpg"]').type('1')
        cy.get('input[name="tradePpg"]').type('1')
        cy.get('input[name="milesDriven"]').type('100')
        cy.get('select[name="milesDrivenTimeframe"]').select('week')
        cy.get('.fuel-savings-label').should('not.exist')
    })

    it("Clears New Vehicle MPG field", () => {
        cy.visit('/fuel-savings')
        cy.get('input[name="newMpg"]').type('1')
        cy.get('input[name="tradeMpg"]').type('1')
        cy.get('input[name="newPpg"]').type('1')
        cy.get('input[name="tradePpg"]').type('1')
        cy.get('input[name="milesDriven"]').type('100')
        cy.get('select[name="milesDrivenTimeframe"]').select('week')
        cy.get('input[name="newMpg"]').clear()
        cy.get('.fuel-savings-label').should('not.exist')
    })

    it("Inputs higher value to newMPG  than to tradeInMPG", () =>{
        cy.visit('/fuel-savings')
        cy.get('input[name="newMpg"]').type('2')
        cy.get('input[name="tradeMpg"]').type('1')
        cy.get('input[name="newPpg"]').type('1')
        cy.get('input[name="tradePpg"]').type('1')
        cy.get('input[name="milesDriven"]').type('100')
        cy.get('select[name="milesDrivenTimeframe"]').select('week')
        cy.get('.fuel-savings-label').contains('td' , 'Savings')     
    })

    it("Inputs lower value to newPPG than to tradeInPPG", () =>{
        cy.visit('/fuel-savings')
        cy.get('input[name="newMpg"]').type('1')
        cy.get('input[name="tradeMpg"]').type('1')
        cy.get('input[name="newPpg"]').type('1')
        cy.get('input[name="tradePpg"]').type('2')
        cy.get('input[name="milesDriven"]').type('100')
        cy.get('select[name="milesDrivenTimeframe"]').select('week')
        cy.get('.fuel-savings-label').contains('td' , 'Savings')
    })

    it("Inputs lower value to newMPG than to tradeInMPG", () =>{
        cy.visit('/fuel-savings')
        cy.get('input[name="newMpg"]').type('1')
        cy.get('input[name="tradeMpg"]').type('2')
        cy.get('input[name="newPpg"]').type('1')
        cy.get('input[name="tradePpg"]').type('1')
        cy.get('input[name="milesDriven"]').type('100')
        cy.get('select[name="milesDrivenTimeframe"]').select('week')
        cy.get('.fuel-savings-label').contains('td' , 'Loss')     
    })

    it("Inputs higher value to newPPG than to tradeInPPG", () =>{
        cy.visit('/fuel-savings')
        cy.get('input[name="newMpg"]').type('1')
        cy.get('input[name="tradeMpg"]').type('1')
        cy.get('input[name="newPpg"]').type('2')
        cy.get('input[name="tradePpg"]').type('1')
        cy.get('input[name="milesDriven"]').type('100')
        cy.get('select[name="milesDrivenTimeframe"]').select('week')
        cy.get('.fuel-savings-label').contains('td' , 'Loss')     
    })

    it("Changes the miles driven period", () =>{
        cy.visit('/fuel-savings')
        cy.get('select[name="milesDrivenTimeframe"]').select('Week')
        cy.get('select[name="milesDrivenTimeframe"]').select('Month')
        cy.get('select[name="milesDrivenTimeframe"]').select('Year')   
    })

})