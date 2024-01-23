export class VerifyPrice {

    //Verify if single product price * quanity = total product price on product details page
    verifyProductDetailsPrice() {
        cy.get("#product_quantity").invoke("prop", "value").then(quanity => {
            //Change data format to numbers
            cy.get('.productfilneprice').then($priceSingle => {
                const priceText = $priceSingle.text()
                const priceString = priceText.replace(/[^0-9.]/g, '')
                const pricePerPiece = parseFloat(priceString)
                cy.log(pricePerPiece)
                //Change data format to numbers
                cy.get('.total-price').then($priceTotal => {
                    const priceText = $priceTotal.text()
                    const priceString = priceText.replace(/[^0-9.]/g, '')
                    const totalPrice = parseFloat(priceString)

                    cy.log("Total price: " + totalPrice)
                    cy.log("Price per piece: " + pricePerPiece)
                    //Compare values
                    expect(totalPrice).to.equal(pricePerPiece * quanity)
                })
            })
        })
    }

    //Verify if single product price * quanity = total product price on cart details page
    //productNumber - product number in cart table ie. 1 = first product in cart
    verifySingleProductCartPrice(productNumber) {
        cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(productNumber).find('[class="form-control short"]').invoke("prop", "value").then(quanity => {
            cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(productNumber).find('td').eq(3).then($priceSingle => {
                //Change data format to numbers
                const priceText = $priceSingle.text()
                const priceString = priceText.replace(/[^0-9.]/g, '')
                const pricePerPiece = parseFloat(priceString)
                cy.log(pricePerPiece)

                cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(productNumber).find('td').eq(5).then($priceTotal => {
                    //Change data format to numbers
                    const priceText = $priceTotal.text()
                    const priceString = priceText.replace(/[^0-9.]/g, '')
                    const totalPrice = parseFloat(priceString)

                    cy.log("Total price: " + totalPrice)
                    cy.log("Price per piece: " + pricePerPiece)
                    //Compare values
                    expect(totalPrice).to.equal(pricePerPiece * quanity)
                })
            })
        })


    }

    //Verify if table with products is showing correct total price of each product
    verifyProductTableCartPrice() {
        cy.get('[class="container-fluid cart-info product-list"] tbody tr').each(($row, index) => {
            //Iterate through cart table and find all unit prices and compare them to total price of specific product
            // index 0 is skipped because in this particular table, first row is header without product data
            if (index > 0) {
                cy.wrap($row).find('[class="form-control short"]').invoke("prop", "value").then(quanity => {
                    cy.wrap($row).find('td').eq(3).then($priceSingle => {
                        //Change data format to numbers
                        const priceText = $priceSingle.text()
                        const priceString = priceText.replace(/[^0-9.]/g, '')
                        const pricePerPiece = parseFloat(priceString)
                        cy.log(pricePerPiece)

                        cy.wrap($row).find('td').eq(5).then($priceTotal => {
                            //Change data format to numbers
                            const priceText = $priceTotal.text()
                            const priceString = priceText.replace(/[^0-9.]/g, '')
                            const totalPrice = parseFloat(priceString)

                            cy.log("Total price: " + totalPrice)
                            cy.log("Price per piece: " + pricePerPiece)
                            //Compare values
                            expect(totalPrice).to.equal(pricePerPiece * quanity)
                        })
                    })
                })
            }

        })
    }

    //Verify if all products total prices = total cart price on cart details page
    verifyTotalCartPrice() {
        //Get all total product prices in cart table and sum it up
        cy.get('[class="container-fluid cart-info product-list"] tbody td:nth-child(6)').then(($cells) => {
            const totals = $cells
                .toArray()
                .map((el) => {
                    return el.innerText
                })
                .map((s) => {
                    return s.replace('$', '')
                })
                .map(parseFloat)
            const sum = Cypress._.sum(totals)
            cy.log(`Sub Total should be ${sum}`)

            cy.get('#totals_table tbody').find('tr').eq(0).find('td').eq(1).then($cartSum => {
                const priceText = $cartSum.text()
                const priceString = priceText.replace(/[^0-9.]/g, '')
                const sumCart = parseFloat(priceString)
                expect(sumCart).to.equal(sum)
            })
        })
    }
}
export default new VerifyPrice