/// <reference types="cypress" />

import Access from "../support/pageObject/access"
import Navigate from "../support/pageObject/navigate"
import VerifyPrice from "../support/pageObject/verifyPrice"


describe("verify product details", () => {

    //Before each test login, after each test log out 
    beforeEach(() => {
        Access.logIn(Cypress.env('login'), Cypress.env('password'))
    })
    afterEach(() => {
        Access.logOut()
    })

    it("random tshirts", () => {

        //Navigate to Appareal-Tshorts
        Navigate.apparealTshirts()
        //Sort and choose first available from the list
        cy.get("#sort").select("Price High > Low")
        cy.get('.productcart').first().click()
        //Choose random available values for color
        cy.get('#option350').select([Math.floor(Math.random() * 2)])
        // cy.get('#option351').select([Math.floor(Math.random() * 2)])
        //Choose random quanity between 1-10
        cy.get("#product_quantity").clear().type(`${[Math.floor(Math.random() * 10) + 1]}`, { delay: 100 })
        //Verify if prices are correctly displayed
        VerifyPrice.verifyProductDetailsPrice()
    })


})