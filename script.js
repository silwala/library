const myLibrary = [];

const modal = document.querySelector("#modal");
const addButton = document.querySelector("#add-button");
const closeModal = document.querySelector("#close-modal")

addButton.addEventListener("click", () =>{
    modal.classList.add("active");
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(){

}

