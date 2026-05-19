//  display book cards when page is loaded --> onload
function init(){
    renderBookCard();
}


// 
function renderBookCard() {
    let bookCardRef = document.getElementById("book-card");
    bookCardRef.innerHTML = "";
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++){
        bookCardRef.innerHTML += getBookTemplate(indexBooks)
    } 
}
