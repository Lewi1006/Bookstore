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


// renders likes seperately 
// so when a book is liked or unliked,
// renderBookCard() does not need to rerender all book cards unnecessarily

// renderLikes(indexBooks) renders data into div in getLikesTemplate (refers to ID here)
// getLikesTemplate gets inserted into getBookTemplate
// --> getBookTemplate now only has to rerender when we reload the page and not when likes get added

// function getBookTemplate(indexBooks) passes indexBooks as argument into renderLikes(indexBooks)
// indexBooks gets first defined in renderBooks() in for loop where it gets its value, 
// --> here getBooksTemplates is created and the value of indexBooks is passed along
// renderBookCard() --> getBookTemplate() --> getLikesTemplate()

// id's need to be unique thats why we need to add indexBooks to it, `` so JS can add index value
// --> `likes_wrapper${indexBooks}`

function renderLikes(indexBooks){
  let likesWrapperRef = document.getElementById(`likes_wrapper${indexBooks}`);
  likesWrapperRef.innerHTML = getLikesTemplate(indexBooks);
}

// comments must be rendered seperately too
// we rnder them into the getCommentsTemplate(indexBooks)
// getCommentsTemplate gets inserted in getBookTemplate

function renderComments(indexBooks){
 let commentsRef = document.getElementById(`comments${indexBooks}`);
 commentsRef.innerHTML = getCommentsTemplate(indexBooks);
}

// #endregion


// #region LIKE COUNT AND BUTTON

// when button is clicked: 
// (heart is already red/liked = true) 
// --> then it turns false and count goes down and vive versa
// change needs to be saved to local storage and only likes are rendered (updated)
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


// change heart color depending on if it is liked or not 
// create empty string that we can fill depending on state with empty heart or filled in heart
function changeColorLike(indexBooks){
  let heart = "";
  if(books[indexBooks].liked === true){
    heart = "&#9829;";

  } else {
    heart = "&#9825;";
  }

  return heart;
}

// #endregion


// adds new comments to old comments array 
// gets each bookCards comments section and the value that gets added to input field
// --> stores input value into variable --> let newComment = commentsInputRef.value;
// pushes new input into the object in the array 
// clears input field after

function addComment(indexBooks) {
  let commentsInputRef = document.getElementById(`comments_input${indexBooks}`);

  let newComment = commentsInputRef.value;
  books[indexBooks].comments.push({ name: "User", comment: newComment });


  commentsInputRef.value = "";

  saveToLocalStorage();
  renderComments(indexBooks);

}



// #region LOCAL STORAGE
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

// #endregion