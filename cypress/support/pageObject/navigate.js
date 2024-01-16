export class Navigate {

    apparealTshirts() {
        cy.visit("/")
        cy.get('#categorymenu').contains('Apparel & accessories').trigger('mouseover')
        cy.get('.subcategories').contains('T-shirts').click({ force: true })
    }

    fragranceWomen() {
        cy.visit("/")
        cy.get('#categorymenu').contains('Fragrance').click()
        cy.get('.contentpanel').contains('Women').click()
    }

    hairConditioner() {
        cy.visit("/index.php?rt=product/category&path=52_54")
    }

}

export default new Navigate