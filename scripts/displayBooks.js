let text = ""; 
let book = { priceAfter: 200, priceBefore: 300 };

text += '<div class=" box">';
text += '<div class="icons">';
text += '<a href="#" class="fas fa-search"></a>';
text += '<a href="#" class="fas fa-heart"></a>';
text += '<a href="#" class="fas fa-eye"></a>';
text += '</div>';
text += '<div class="image">';
text += '<img src="./images/book types/The_Fault_in_Our_Stars.jpg" alt="">';
text += '</div>';
text += '<div class="contents">';
text += '<h3>featured books</h3>';
text += '<div class="price" >' + book.priceAfter.toLocaleString( "en-ZA", { style:"currency", currency:"ZAR" } ) + ' <span>' + book.priceBefore.toLocaleString( "en-ZA", { style:"currency", currency:"ZAR" } ) + '</span></div>';
text += '<a href="cart.html" class="btn">Add To Cart</a>';
text += '</div>';
text += '</div>';



document.getElementById("dis").innerHTML = text;