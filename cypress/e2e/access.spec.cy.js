/// <reference types="cypress" />

import Access from "../support/pageObject/access"

//Login and logout using credentials provided in environmental variables in cypress.config.js
describe("Access", () => {
    it("Login and logout", () => {
        Access.logIn(Cypress.env('login'), Cypress.env('password'))
        Access.logOut()
    })

})