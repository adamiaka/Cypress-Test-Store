export class VerifyPrice {

    // verifyTotalProductPrice(quanity) {
    //     cy.get("#product_quantity").clear().type(quanity, { delay: 100 })

    //     cy.get('.productfilneprice').then($priceSingle => {
    //         const priceText = $priceSingle.text()
    //         const priceString = priceText.replace(/[^0-9.]/g, '')
    //         const pricePerPiece = parseFloat(priceString)
    //         cy.log(pricePerPiece)

    //         cy.get('.total-price').then($priceTotal => {
    //             const priceText = $priceTotal.text()
    //             const priceString = priceText.replace(/[^0-9.]/g, '')
    //             const totalPrice = parseFloat(priceString)

    //             cy.log("Total price: " + totalPrice)
    //             cy.log("Price per piece: " + pricePerPiece)

    //             expect(totalPrice).to.equal(pricePerPiece * quanity)
    //         })
    //     })

    // }

    //Verify if single product price * quanity = total product price on product details page
    verifyProductDetailsPrice() {
        cy.get("#product_quantity").invoke("prop", "value").then(quanity => {
            cy.get('.productfilneprice').then($priceSingle => {
                const priceText = $priceSingle.text()
                const priceString = priceText.replace(/[^0-9.]/g, '')
                const pricePerPiece = parseFloat(priceString)
                cy.log(pricePerPiece)

                cy.get('.total-price').then($priceTotal => {
                    const priceText = $priceTotal.text()
                    const priceString = priceText.replace(/[^0-9.]/g, '')
                    const totalPrice = parseFloat(priceString)

                    cy.log("Total price: " + totalPrice)
                    cy.log("Price per piece: " + pricePerPiece)

                    expect(totalPrice).to.equal(pricePerPiece * quanity)
                })
            })
        })
    }

    //Verify if single product price * quanity = total product price on cart details page
    verifyProductCartPrice(productNumber) {
        cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(productNumber).find('[class="form-control short"]').invoke("prop", "value").then(quanity => {
            cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(productNumber).find('td').eq(3).then($priceSingle => {
                const priceText = $priceSingle.text()
                const priceString = priceText.replace(/[^0-9.]/g, '')
                const pricePerPiece = parseFloat(priceString)
                cy.log(pricePerPiece)

                cy.get('table[class="table table-striped table-bordered"] tbody tr').eq(productNumber).find('td').eq(5).then($priceTotal => {
                    const priceText = $priceTotal.text()
                    const priceString = priceText.replace(/[^0-9.]/g, '')
                    const totalPrice = parseFloat(priceString)

                    cy.log("Total price: " + totalPrice)
                    cy.log("Price per piece: " + pricePerPiece)

                    expect(totalPrice).to.equal(pricePerPiece * quanity)
                })
            })
        })


    }
}
export default new VerifyPrice