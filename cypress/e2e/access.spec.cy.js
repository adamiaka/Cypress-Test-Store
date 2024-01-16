/// <reference types="cypress" />

import Access from "../support/pageObject/access"

describe("Access", () => {
    it("Login and logout", () => {
        Access.logIn(Cypress.env('login'), Cypress.env('password'))
        Access.logOut()
    })

})