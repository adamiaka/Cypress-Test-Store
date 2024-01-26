export class Cart {

    //Modify quanity of all items in cart
    modifyProductsQuanity() {
        cy.get('[class="container-fluid cart-info product-list"] tbody tr').each(($row, index) => {
            //Iterate through cart table and change all unit prices
            // index 0 is skipped because in this particular table, first row is header without product data
            if (index > 0) {
                cy.wrap($row).find('[class="form-control short"]').clear().type(`${[Math.floor(Math.random() * 4) + 1]}`, { delay: 100 })
            }
        })
        cy.get('#cart_update').click()
    }

    //Delete all items from cart
    clearCart() {
        cy.get('[class="container-fluid cart-info product-list"] tbody tr')
            .should('have.length.gte', 0)
            .then(($delete) => {
                if (!$delete.length) {
                    cy.log('Cart is empty.')
                    return
                }
                cy.wrap($delete).find('[class="btn btn-sm btn-default"]').click({ force: true, multiple: true })
            })

            cy.get('.contentpanel').should("contain", "Your shopping cart is empty!");
    }
}
export default new Cart