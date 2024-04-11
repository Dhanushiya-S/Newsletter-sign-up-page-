const signUp = document.getElementById("sign-up");
const emailError = document.getElementById("email-error");
const emailInput = document.getElementById("email-input");
const subscribeBtn = document.getElementById("subscribe-btn");

const successMsg = document.getElementById("success-msg");
const dismissBtn = document.getElementById("dismiss-btn");
const userEmail = document.getElementById("user-email");

subscribeBtn.addEventListener("click",function(){
    let query = window.matchMedia("(max-width : 800px)");
    if(query.matches){
        if(!emailInput.value.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)){
            emailError.classList.add("invalid-email-active");
            emailInput.classList.add("input-error");
        } 
        else{
            signUp.classList.add("card");
            successMsg.classList.remove("card");
            successMsg.classList.add("card-active");
            emailError.classList.remove("invalid-email-active");
            emailInput.classList.remove("input-error");
        }
    }
    else{
        if(!emailInput.value.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)){
            emailError.classList.add("invalid-email-active");
            emailInput.classList.add("input-error");
        } 
        else{
            signUp.classList.add("card");
            successMsg.classList.add("cardActive");
            emailError.classList.remove("invalid-email-active");
            emailInput.classList.remove("input-error");
    }
}
});

dismissBtn.addEventListener("click",function(){
    let query = window.matchMedia("(max-width : 800px)");
    if(query.matches){
        signUp.classList.remove("card");
        successMsg.classList.remove("card-active");
        successMsg.classList.add("card");
    }
    else{
        signUp.classList.remove("card");
        successMsg.classList.remove("cardActive");
        successMsg.classList.remove("card-active");
    }
});