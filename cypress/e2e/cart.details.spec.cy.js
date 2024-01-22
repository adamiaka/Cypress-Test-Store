/// <reference types="cypress" />

import Access from "../support/pageObject/access"
import Navigate from "../support/pageObject/navigate"
import VerifyPrice from "../support/pageObject/verifyPrice"


describe("cart details", () => {

    //Before each test login, after each test log out 
    // beforeEach(() => {
    //     Access.logIn(Cypress.env('login'), Cypress.env('password'))
    // })
    // afterEach(() => {
    //     Access.logOut()
    // })

    it("buy tshirts", () => {

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

        // cy.get("#product_quantity").clear().type("3", { delay: 100 })

        // cy.get('.productfilneprice').then($priceSingle => {
        //     const priceText = $priceSingle.text()
        //     const priceString = priceText.replace(/[^0-9.]/g, '')
        //     const pricePerPiece = parseFloat(priceString)
        //     cy.log(pricePerPiece)

        //     cy.get('.total-price').then($priceTotal => {
        //         const priceText = $priceTotal.text()
        //         const priceString = priceText.replace(/[^0-9.]/g, '')
        //         const totalPrice = parseFloat(priceString)

        //         cy.log("Total price: "+totalPrice)
        //         cy.log("Price per piece: "+pricePerPiece)

        //         expect(totalPrice).to.equal(pricePerPiece*3)
        //     })
        // })

        cy.get('.cart').click()
        // cy.get('[class="input-group input-group-sm"]').find(('[class="form-control short"]')).clear()
        // .type(`${[Math.floor(Math.random() * 10) + 1]}`, { delay: 100 })

        //Verify first item in cart
        // cy.get('[class="input-group input-group-sm"]').find(('[class="form-control short"]')).clear()
        // .type(`${[Math.floor(Math.random() * 10) + 1]}`, { delay: 100 })

        // cy.get('tbody tr').eq(0)          // first row
        // .find('td').eq(2)               // third col
        // .should('contain', 'complete')  // criteria to check 

        // cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(1).find('[class="form-control short"]').invoke("prop", "value").then(quanity => {
        //     cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(1).find('td').eq(3).then($priceSingle => {
        //         const priceText = $priceSingle.text()
        //         const priceString = priceText.replace(/[^0-9.]/g, '')
        //         const pricePerPiece = parseFloat(priceString)
        //         cy.log(pricePerPiece)

        //         cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(1).find('td').eq(5).then($priceTotal => {
        //             const priceText = $priceTotal.text()
        //             const priceString = priceText.replace(/[^0-9.]/g, '')
        //             const totalPrice = parseFloat(priceString)

        //             cy.log("Total price: " + totalPrice)
        //             cy.log("Price per piece: " + pricePerPiece)

        //             expect(totalPrice).to.equal(pricePerPiece * quanity)
        //         })
        //     })
        // })

        VerifyPrice.verifyProductCartPrice(1)

    })


})