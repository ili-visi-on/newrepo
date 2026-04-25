const openButton = document.querySelector(".openmodal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".closeButton");
const modal = document.querySelector(".modal");
const userForm = document.querySelector(".userform");

function modalTrigger(){
    overlay.classList.toggle("closed");
    setTimeout(() => {
        modal.classList.toggle("modalClosed");
    }, 10);
}

function overlayClick(event){
   
    if (event.target.classList.contains("overlay")){
        modalTrigger();
    }
}
openButton.addEventListener("click", modalTrigger);
overlay.addEventListener("click", overlayClick);
closeButton.addEventListener("click", modalTrigger);


userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(userForm);
});

// Дз: форма модальне вікно, Імя призвіще, вік. Чекбокси: Предмети для учня.
