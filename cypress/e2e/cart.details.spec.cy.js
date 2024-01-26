/// <reference types="cypress" />

import Access from "../support/pageObject/access"
import VerifyPrice from "../support/pageObject/verifyPrice"
import BuyRandom from "../support/pageObject/buyRandom"
import Cart from "../support/pageObject/cart"

describe("cart details", () => {

    //Before each test login, after each test log out 
    beforeEach(() => {
        Access.logIn(Cypress.env('login'), Cypress.env('password'))
    })
    afterEach(() => {
        Access.logOut()
    })

    it("buy tshirts and fragrance", () => {
        
        //Buy random items to fill up cart
        BuyRandom.buyApparealTshirt()
        BuyRandom.buyFragranceWomen()
        // //Verify prices in cart - unit price and total product price
        VerifyPrice.verifyProductTableCartPrice()
        // //Verify total price for all items in cart
        VerifyPrice.verifyTotalCartPrice()

        // //Modify quanity and verify prices
        Cart.modifyProductsQuanity()
        VerifyPrice.verifyProductTableCartPrice()
        VerifyPrice.verifyTotalCartPrice()

        //Clear cart
        Cart.clearCart()
    })
})