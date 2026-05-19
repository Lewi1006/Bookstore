// add book card
function getBookTemplate(indexBooks) {
  return `

<div class="book-card-wrapper">
  <h1>${books[indexBooks].name}</h1>
  <img src="./assets/icons/open_book.svg" alt="open book icon"/>
  <div class="book-price-likes">
      <h2 class="price">${books[indexBooks].price} €</h2>
      <div class="likes-wrapper">
          <p class="counter"></p>
          <img onclick="" src="./assets/icons/favorite.png" alt="red heart icon"/>
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
  <div>
  <h3>Comments:</h3>
   <table>
  <tbody>
  <tr>
  <th></th>
  <tr>
  <td></td>
  </tr>
  </tbody>
  </table>
  <input>
  </div>
  </div>
  `;
}
