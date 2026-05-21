//  display book cards when page is loaded --> onload
function init() {
  getFromLocalStorage();
  renderBookCard();
}

// #region RENDER FUNCTIONS

// renders book objects with for loop from array into book cards 
// --> refers to html object (in index.html) with id=book-card
function renderBookCard() {
  let bookCardRef = document.getElementById("book-card");
  bookCardRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    bookCardRef.innerHTML += getBookTemplate(indexBooks);
  }
}


// renders likes seperately so that when book is liked or unliked 
// it doesn't have to execute renderBooks, which would unneccesarily render all cards
// we want to put data in div in getBookTemplate (refer to ID here)
// 
function renderLikes(indexBooks){
  let likesWrapperRef = document.getElementById(`likes_wrapper${indexBooks}`);
  likesWrapperRef.innerHTML = getLikesTemplate(indexBooks);
}


function renderComments(indexBooks){
 let commentsRef = document.getElementById(`comments${indexBooks}`);
 commentsRef.innerHTML = getCommentsTemplate(indexBooks);
}

// #endregion

// when button is clicked (heart is already red/liked = true) --> then it turns false and count goes down and vive versa
function countLike(indexBooks) {
  if (books[indexBooks].liked === true) {
    books[indexBooks].liked = false;
    books[indexBooks].likes--;
  } else if (books[indexBooks].liked === false) {
    books[indexBooks].liked = true;
    books[indexBooks].likes++;
  }

  saveToLocalStorage();
  renderLikes(indexBooks);
}


function changeColorLike(indexBooks){
      // change heart color depending on if it is liked or not 
  let heart = "";
  if(books[indexBooks].liked === true){
    heart = "&#9829;";

  } else {
    heart = "&#9825;";
  }

  return heart;
}



function addComment(indexBooks) {
  let commentsInputRef = document.getElementById(`comments_input${indexBooks}`);

  let newComment = commentsInputRef.value;
  books[indexBooks].comments.push({ name: "User", comment: newComment });


  commentsInputRef.value = "";

  saveToLocalStorage();
  renderComments(indexBooks);

}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  const storedBooks = localStorage.getItem("books");
  let myArrBooks = JSON.parse(storedBooks);

  if (myArrBooks !== null) {
    books = myArrBooks;
  }
}
