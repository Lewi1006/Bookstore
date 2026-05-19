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


// when button is clicked (heart is already red/liked = true) --> then it turns false and count goes down and vive versa
function countLike(indexBooks){
    if(books[indexBooks].liked === true){
        books[indexBooks].liked = false;
        books[indexBooks].likes--;

    } else if(books[indexBooks].liked === false){
        books[indexBooks].liked = true;
        books[indexBooks].likes++;
    }

        renderBookCard();
}


// &#9829;