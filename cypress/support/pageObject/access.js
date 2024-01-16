export class Access{

    logIn(login, password){
        cy.visit("/")
        cy.contains('Login or register').click()
        cy.get('#loginFrm_loginname').type(login)
        cy.get('#loginFrm_password').type(password)
        cy.contains('[title="Login"]', 'Login').click()
        cy.get('.maintext').should('contain', 'My Account')
        cy.get('#customer_menu_top').should('contain', 'Welcome back')
        cy.visit("/")

        
    }

    logOut(){
        cy.visit("/")
        cy.get('#customer_menu_top').trigger('mouseover')
        cy.contains('Logoff').click()
        cy.get('.maintext').should('contain', 'Account Logout')
        cy.get('#customer_menu_top').should('contain', 'Login or register')
        // find('.fa fa-lock fa-fw').contains("Logoff").click()
    }

}



export default new Access