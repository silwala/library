const myLibrary = [];

const modal = document.querySelector("#modal");
const modalContainer = document.querySelector("#modal-container")
const errMsg = document.querySelector("#err-msg")
const addButton = document.querySelector("#add-button");
const closeModalBtn = document.querySelector("#close-modal")
const overlay = document.querySelector("#overlay")
const library = document.querySelector("#library")
const bookAddButton = document.querySelector("#form-add-button")

const userTitle = document.querySelector("#title");
const userAuthor = document.querySelector("#author");
const userPages = document.querySelector("#pages");
const userRead = document.querySelector("#read");

const books = document.querySelector("#books");

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
    resetErr();
    if(!formElementEmpty()){
        title = userTitle.value;
        author = userAuthor.value;
        pages = userPages.value;
        read = userRead.checked;
        console.log(read)
    
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
    addBookToPage(book);
}

function closeModal(){
    resetForm();
    resetErr();
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function resetForm(){
    userAuthor.value = "";
    userTitle.value = "";
    userPages.value = "";
    userRead.checked = false;
}
function resetErr(){
    errMsg.textContent = "";
    userTitle.style.outline = "none";
    userAuthor.style.outline = "none";
    userPages.style.outline = "none";
}

function formElementEmpty(){
    console.log("formElementCheck")
    console.log(userTitle.value.trim())
    if(userTitle.value.trim() === ""){
        errMsg.textContent = "Title cannot be empty"
        userTitle.style.outline = "2px solid #ff2d2d";
        return true;
    }
    else if(userAuthor.value.trim() === ""){
        errMsg.textContent = "Author cannot be empty";
        userAuthor.style.outline = "2px solid #ff2d2d";
        return true;
    }
    else if(userPages.value.trim() === ""){
        errMsg.textContent = "Pages cannot be empty"
        userPages.style.outline = "2px solid #ff2d2d";
        return true;
    }
    return false;
}

function addBookToPage(book){
    bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    books.appendChild(bookCard);
    
    bookTitle = document.createElement("p");
    bookAuthor = document.createElement("p");
    bookPages = document.createElement("p");
    bookTitle.classList.add("book-title");
    bookAuthor.classList.add("book-author");
    bookPages.classList.add("book-pages");
    bookCard.append(bookTitle, bookAuthor, bookPages)

    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `pages: ${book.pages}`;

    readButton = document.createElement("button");
    readButton.classList.add("read-button");
    console.log(book.read)
    if(book.read === true){
        console.log(book.read);
        readButton.textContent = "Read";
        readButton.classList.add("book-read");
    }else{
        console.log(book.read);
        readButton.textContent = "Not Read";
        readButton.classList.add("not-read");
    }
    bookCard.appendChild(readButton)
    readButton.addEventListener("click", () => changeReadStatus(readButton));

    removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    bookCard.appendChild(removeButton);
}

function changeReadStatus(readButton){
    if(readButton.classList.contains("book-read")){
        readButton.classList.add("not-read");
        readButton.classList.remove("book-read");
        readButton.textContent = "Not Read";
    }
    else{
        readButton.classList.add("book-read");
        readButton.classList.remove("not-read");
        readButton.textContent = "Read";
    }
}