
// add book card HTML 
function getBookTemplate(indexBooks) {
  
  // toFixed converts number to a string so that decimal numbers are displayed 
  // --> otherwise the 0 of price in objects falls away 
  // --> 14.50 gets displayed as 14.5 cause for numbers the 0 has no mathematical meaning
  // then we call the variable price in h2
  let price = books[indexBooks].price.toFixed(2);

  return `

<div class="book-card-wrapper">
  <h1>${books[indexBooks].name}</h1>
  <img src="./assets/icons/open_book.svg" alt="open book icon"/>
  <div class="book-price-likes">
      <h2 class="price">${price} €</h2>
        ${getLikesTemplate(indexBooks)}
  </div>
  <table class="book-info-table" role="table">
  <tbody>
  <tr>
  <th>Author:</th>
  <td>${books[indexBooks].author}</td>
  </tr>
  <tr>
  <th>Published:</th>
  <td>${books[indexBooks].publishedYear}</td>
  </tr>
 <tr>
 <th>Genre:</th>
 <td>${books[indexBooks].genre}</td>
  </tr>
  </tbody> 
  </table>
  
  ${getCommentsTemplate(indexBooks)}

  </div>
  `;
}


// seperate template for likes that can be called in getBookTemplate and returns value
// --> meaning html code gets inserted in BookTemplate html but is seperate in this function 
// cause components change so it can be rendered seperately
// calling changeColorLike function so that heart button is the right color

function getLikesTemplate(indexBooks){
 return `
 <div id="likes_wrapper${indexBooks}" class="likes-wrapper">
 <p class="counter">${books[indexBooks].likes}</p>
 <button class="like" tabindex="0" aria-label="like or unlike this book" onclick="countLike(${indexBooks})">${changeColorLike(indexBooks)}</button>
</div>
 `;
}

// comments template has html for if there is no comments yet and if comments already exist
// first we create empty string where we can add the right html depending on the state 
// if the comments array is empty(===0) we store p-tag into variable 
// and then add the variable with the stored p tag into the html that we return
// else we for loop through the comments array of each book and add a comments table to html that we return
// template gets returned and called in bookTemplate so that html section is inserted into the bookcards html 

function getCommentsTemplate(indexBooks){

  let commentsSection = "";

  if(books[indexBooks].comments.length === 0){
    commentsSection +=
    `<p>no comments yet, be the first</p>`

        return `
        <div id="comments${indexBooks}" class="comments">
        <h3>Comments:</h3>
         ${commentsSection}
         <div class="comments-input-section">
         <input id="comments_input${indexBooks}" class="comments-input" type="text" placeholder="Add your comment"/>
         <button class="add-button" aria-label="add comment" onclick="addComment(${indexBooks})">+</button>
         </div>
         </div>
     `
  } else{

    for(let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++){
        commentsSection +=
        `
        <tr>
        <th class="user-name">${books[indexBooks].comments[indexComments].name}</th>
        <td class="comment">${books[indexBooks].comments[indexComments].comment}</td>
        </tr>
        `
     }

     return `
     <div id="comments${indexBooks}" class="comments">
     <h3>Comments:</h3>
     <div class="comments-table-wrapper">
     <table role="table">
     <tbody>
     ${commentsSection}
     </tbody>
     </table>
     </div>

     <div class="comments-input-section">
     <input id="comments_input${indexBooks}" class="comments-input" aria-label="input a comment" type="text" placeholder="Add your comment"/>
     <button class="add-button" aria-label="add comment" onclick="addComment(${indexBooks})">+</button>
     </div>    
     </div>
     `

    } 
}