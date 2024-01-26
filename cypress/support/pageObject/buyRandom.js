export class BuyRandom {

    //Buy random TShirt
    buyApparealTshirt() {
        //Navigate to Appareal-Tshorts
        cy.visit("/")
        cy.get('#categorymenu').contains('Apparel & accessories').trigger('mouseover')
        cy.get('.subcategories').contains('T-shirts').click({ force: true })
        //Sort and choose first available from the list
        cy.get("#sort").select([Math.floor(Math.random() * 7)])
        cy.get('.productcart').first().click()
        //Choose random quanity between 1-5
        cy.get("#product_quantity").clear().type(`${[Math.floor(Math.random() * 4) + 1]}`, { delay: 100 })
        cy.get('.cart').click()
    }

    buyFragranceWomen() {
        //Navigate to Appareal-Tshorts
        cy.visit("/")
        cy.get('#categorymenu').contains('Fragrance').click()
        cy.get('.contentpanel').contains('Women').click()
        //Sort and choose first available from the list
        cy.get("#sort").select([Math.floor(Math.random() * 7)])
        cy.get('.productcart').first().click()
        //Choose random quanity between 1-5
        cy.get("#product_quantity").clear().type(`${[Math.floor(Math.random() * 4) + 1]}`, { delay: 100 })
        cy.get('.cart').click()
    }
}
export default new BuyRandom