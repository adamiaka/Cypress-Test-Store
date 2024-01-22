/// <reference types="cypress" />

import Access from "../support/pageObject/access"
import Navigate from "../support/pageObject/navigate"

describe("Navigate subcategories", () => {

    //Before each test login, after each test log out 
    beforeEach(() => {
        Access.logIn(Cypress.env('login'), Cypress.env('password'))
    })
    afterEach(() => {
        Access.logOut()
    })

    //Verify if navigation works properly and correct pages are openeda
    it("Appareal and accessories / T-shirt", () => {
        Navigate.apparealTshirts()
        cy.get('.heading1').should("contain", "T-shirt")
    })

    it("Fragrance / Women", () => {
        Navigate.fragranceWomen()
        cy.get('.heading1').should("contain", "Women")
    })

    it("Hair Care / Conditioner", () => {
        Navigate.hairConditioner()
        cy.get('.heading1').should("contain", "Conditioner")
    })
})