const myLibrary = [];

const modal = document.querySelector("#modal");
const modalContainer = document.querySelector("#modal-container")
const addButton = document.querySelector("#add-button");
const closeModal = document.querySelector("#close-modal")
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

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
})

modalContainer.addEventListener("click", (e) => {
    if(e.target === overlay){
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
})

bookAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    title = userTitle.value;
    author = userAuthor.value;
    pages = userPages.value;
    read = (userRead.value === "on") ? true : false;

    addBookToLibrary(new Book(title, author, pages, read))
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

