class payment
{
    setName(name){
        cy.get("input[name='name_on_card']").type(name);
    }
    setCardNumber(cardnumber){
        cy.get("input[name='card_number']").type(cardnumber);
    }
    setCvc(cvc){
        cy.get("input[placeholder='ex. 311']").type(cvc);
    }
    setExpiration(expiration){
        cy.get("input[placeholder='MM']").type(expiration);
    }
    setYear(year){
        cy.get("input[placeholder='YYYY']").type(year);
    }
    clickConfirm(){
        cy.get("#submit").click();
    }
    clickContine(){
        cy.get(".btn.btn-primary").click()
    }
}

export default payment;