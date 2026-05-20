
// add book card
function getBookTemplate(indexBooks) {
  
  // toFixed converts number to a string so that decimal numbers are displayed 
  // --> otherwise the 0 of price in objects falls away 
  // --> 14.50 gets displayed as 14.5 cause for numbers the 0 has no mathematical meaning
  // then we call the variable price in h2
  let price = books[indexBooks].price.toFixed(2);

  // change heart color depending on if it is liked or not 
  let heart = "";
  if(books[indexBooks].liked === true){
    heart = "&#9829;";

  } else {
    heart = "&#9825;";
  }


  return `

<div class="book-card-wrapper">
  <h1>${books[indexBooks].name}</h1>
  <img src="./assets/icons/open_book.svg" alt="open book icon"/>
  <div class="book-price-likes">
      <h2 class="price">${price} €</h2>
      <div class="likes-wrapper">
          <p class="counter">${books[indexBooks].likes}</p>
          <button class="like" tabindex="0" onclick="countLike(${indexBooks})">${heart}</button>
          </div>
  </div>
  <table class="book-info-table">
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
  `;
}




function getCommentsTemplate(indexBooks){

  let commentsSection = "";

  if(books[indexBooks].comments.length === 0){
    commentsSection +=
    `<p>no comments yet, be the first</p>`

        return `
       <div class="comments">
       <h3>Comments:</h3>
       ${commentsSection}
       <div class="comments-input-section">
       <input id="comments_input${indexBooks}" class="comments-input" type="text" placeholder="Add your comment"/>
       <button class="add-button" onclick="addComment(${indexBooks})">+</button>
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
       <div class="comments">
       <h3>Comments:</h3>
       <div class="comments-table-wrapper">
       <table>
       <tbody>
       ${commentsSection}
       </tbody>
       </table>
       </div>

       <div class="comments-input-section">
       <input id="comments_input${indexBooks}" class="comments-input" type="text" placeholder="Add your comment"/>
       <button class="add-button" onclick="addComment(${indexBooks})">+</button>
       </div>

       </div>
     `

    } 
}