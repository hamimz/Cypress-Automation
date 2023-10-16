class login
{
    setUserName(username){
        cy.get("input[placeholder='Name']").type(username);
    }

    setEmail(email){
        cy.get("input[data-qa='signup-email']").type(email);
    }

    clickSignUp(){
        cy.get(".btn.btn-default[data-qa='signup-button']").click();
    }

    verifySignUp(){
        cy.get(".btn.btn-default[data-qa='create-account']").should('have.text','Create Account');
    }
}

export default login;
