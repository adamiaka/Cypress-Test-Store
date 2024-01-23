export class BuyRandom {

    //Buy random TShirt
    buyApparealTshirt() {
        //Navigate to Appareal-Tshorts
        cy.visit("/")
        cy.get('#categorymenu').contains('Apparel & accessories').trigger('mouseover')
        cy.get('.subcategories').contains('T-shirts').click({ force: true })
        //Sort and choose first available from the list
        cy.get("#sort").select("Price High > Low")
        cy.get('.productcart').first().click()
        //Choose random available values for color
        cy.get('#option350').select([Math.floor(Math.random() * 1)])
        //Choose random quanity between 1-10
        cy.get("#product_quantity").clear().type(`${[Math.floor(Math.random() * 5) + 1]}`, { delay: 100 })
        cy.get('.cart').click()
    }

    buyFragranceWomen() {
        //Navigate to Appareal-Tshorts
        cy.visit("/")
        cy.get('#categorymenu').contains('Fragrance').click()
        cy.get('.contentpanel').contains('Women').click()
        //Sort and choose first available from the list
        cy.get("#sort").select("Price High > Low")
        cy.get('.productcart').first().click()
        //Choose random available values for size
        cy.get('#option330').select([Math.floor(Math.random() * 2)])
        //Choose random quanity between 1-10
        cy.get("#product_quantity").clear().type(`${[Math.floor(Math.random() * 5) + 1]}`, { delay: 100 })
        cy.get('.cart').click()
    }
}
export default new BuyRandom