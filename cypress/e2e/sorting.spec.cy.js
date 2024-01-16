/// <reference types="cypress" />

import Access from "../support/pageObject/access"
import Navigate from "../support/pageObject/navigate"

describe("T-shirts filters", () => {

    beforeEach(() => {
        Access.logIn(Cypress.env('login'), Cypress.env('password'))
    })
    afterEach(() => {
        Access.logOut()
    })

    it("Price Sorting", () => {

        Navigate.apparealTshirts()
        cy.get("#sort").select("Price Low > High")
        cy.get('[class="col-md-3 col-sm-6 col-xs-12"]').find('.oneprice').then(($prices) => {
            const pricesText = (el) => el.innerText
            const pricesDigits = (str) => str.replace(/[^0-9.]/g, '')
            const prices = Cypress._.map($prices, (el) =>
                parseFloat(pricesDigits(pricesText(el))))
            const sortedPrices = Cypress._.sortBy(prices)
            expect(sortedPrices).to.deep.equal(prices)
            return prices
        })
    })
    it("Name sorting", () => {
        Navigate.apparealTshirts()
        cy.get("#sort").select("Name A - Z")
        cy.get('[class="col-md-3 col-sm-6 col-xs-12"]').find('.prdocutname').then(($names) => {
            const namesText = (el) => el.innerText
            console.log(namesText)
            const names = Cypress._.map($names, (el) => namesText(el))
            const sortedNames = Cypress._.sortBy(names)
            expect(sortedNames).to.deep.equal(names)
            return names
        })
    })
})