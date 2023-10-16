import login from "../pageObjects/loginpage.js";
import fillup from "../pageObjects/fillup.js";
import cart from "../pageObjects/addCart.js";
import payment from "../pageObjects/payment.js";

describe('pom',()=>{
    it.only('signUpTest',()=>{
        cy.visit("https://automationexercise.com");
        cy.visit("https://automationexercise.com/signup");
        const signUser = new login();
        signUser.setUserName("Mahesh");
        signUser.setEmail('mahe3276415111@gmail.com');
        signUser.clickSignUp();
        signUser.verifySignUp();

        const userInfo = new fillup();
        userInfo.setTitle();
        userInfo.setPassword('automation');
        userInfo.setDate();
        userInfo.setSubscriptions();
        userInfo.setFirstName('Mahesh');
        userInfo.setLastName('Raj');
        userInfo.setCompany('Marico');
        userInfo.setAddress('Vancouver Road No.#2');
        userInfo.setSecondAddress('Torronto Road No.#4');
        userInfo.setCountry();
        userInfo.setState('Vancouver');
        userInfo.setCity('Vancouver');
        userInfo.setZipcode('1212');
        userInfo.setMobile('34534523412');
        userInfo.clickCreateAccount();
        userInfo.verifyAccount();

        const cartHandle = new cart();
        cartHandle.setCart();
        cartHandle.clickCart();
        cartHandle.clickContinueShopping();
        cy.visit("https://automationexercise.com/view_cart");
        cartHandle.verifyCheckout();
        cartHandle.clickCheckout();
        cartHandle.verifyConfirmation();
        cartHandle.clickConfirm();

        const paymentDetails = new payment();
        paymentDetails.setName('mahesh');
        paymentDetails.setCardNumber('723472938');
        paymentDetails.setCvc('998');
        paymentDetails.setExpiration('7/24');
        paymentDetails.setYear('2024');
        paymentDetails.clickConfirm();
        paymentDetails.clickContine();
    })
})