class cart
{
    setCart(){
        cy.get("a[href='/product_details/1']").click();
    }
    clickCart(){
        cy.get("button[type='button']").click();
    }
    clickContinueShopping(){
        cy.get(".btn.btn-success.close-modal.btn-block").click();
    }
    clickCartDetails(){
        cy.get("a[href='/view_cart'][shub-ins='1']").click();
    }
    verifyCheckout(){
        cy.get(".btn.btn-default.check_out").should('have.text','Proceed To Checkout');
    }
    clickCheckout(){
        cy.get(".btn.btn-default.check_out").click();
    }
    verifyConfirmation(){
        cy.get(".btn.btn-default.check_out").should('have.text','Place Order');
    }
    clickConfirm(){
        cy.get(".btn.btn-default.check_out").click();
    }
}

export default cart;