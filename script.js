//  display book cards when page is loaded --> onload
function init(){
    renderBookCard();
}


// 
function renderBookCard() {
    let bookCardRef = document.getElementById("book-card");
    bookCardRef.innerHTML = "";
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++){
        bookCardRef.innerHTML += getBookTemplate(indexBooks);
    } 
}


// when button is clicked (heart is already red/liked = true) --> then it turns false and count goes down and vive versa
function countLike(indexBooks){
    if(books[indexBooks].liked === true){
        books[indexBooks].liked = false;
        books[indexBooks].likes--;

    } else if (books[indexBooks].liked === false){
        books[indexBooks].liked = true;
        books[indexBooks].likes++;
    }

        renderBookCard();
}



function addComment(indexBooks){
let commentsInputRef = document.getElementById(`comments_input${indexBooks}`);

let newComment = commentsInputRef.value; 
books[indexBooks].comments.push({name: "User", comment: newComment});

renderBookCard();

commentsInputRef.value = "";
}



// &#9829;

// function renderComments(){
//     // let commentsRef = document.getElementById("comments");
//     // commentsRef.innerHTML = "";
//     // for(let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++){
//     //     commentsRef.innerHTML += getCommentsTemplate(indexComments);
//     // }
// }