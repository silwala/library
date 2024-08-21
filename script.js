const myLibrary = [];

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", () =>{
    dialog.showModal();
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(){

}

