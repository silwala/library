const myLibrary = [];

const modal = document.querySelector("#modal");
const modalContainer = document.querySelector("#modal-container")
const addButton = document.querySelector("#add-button");
const closeModalBtn = document.querySelector("#close-modal")
const overlay = document.querySelector("#overlay")
const library = document.querySelector("#library")
const bookAddButton = document.querySelector("#form-add-button")

const userTitle = document.querySelector("#title");
const userAuthor = document.querySelector("#author");
const userPages = document.querySelector("#pages");
const userRead = document.querySelector("#read");

addButton.addEventListener("click", () =>{
    modal.classList.add("active");
    overlay.classList.add("active");
})

closeModalBtn.addEventListener("click", closeModal)
document.addEventListener("keydown",  (e) => {
    if(e.key === "Escape" && modal.classList.contains("active")){
        closeModal();
    }
})

modalContainer.addEventListener("click", (e) => {
    if(e.target === overlay){
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
})

bookAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(!checkEmpty()){
        title = userTitle.value;
        author = userAuthor.value;
        pages = userPages.value;
        read = (userRead.value === "on") ? true : false;
    
        addBookToLibrary(new Book(title, author, pages, read))
    
        closeModal();
    }
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(book){
    myLibrary.push(book);
    console.log(myLibrary);
}

function closeModal(){
    resetForm();
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function resetForm(){
    userAuthor.value = "";
    userTitle.value = "";
    userPages.value = "";
    userRead.checked = false;
}

function checkEmpty(){
    if(userTitle.value.trim = ""){
        userTitle.style.border = "1px solid red";
        return false
    }
}