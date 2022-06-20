

//creating class for users
class User{
    constructor(fullnames, email, phone, pwd){
        this.fullnames = fullnames;
        this.email = email;
        this.phone = phone;
        this.pwd = pwd;
    }

}
/*

//class for books
class Book{
    constructor(title, author, price, description, department, genre) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = description;
        this.department = department;
        this.genre = genre;
    }

    printBook() {
        console.log("printing book");
        let HtmlText = "";
        HtmlText = "<div><h1>" + this.title + "</h1>";
        HtmlText = HtmlText + "<h2>" + this.author + "</h2>";
        HtmlText = HtmlText + "<p>" + this.description + "</p>";
        HtmlText = HtmlText + "<h3>R" + this.price + "</h3>";
        HtmlText = HtmlText + "<h3>" + this.department + "</h3>";
        HtmlText = HtmlText + "<h3>" + this.genre + "</h3>";
        HtmlText = HtmlText + "</div>";

            return HtmlText;
    }
}

//class for books
class BookShelf {
    constructor() {
        this.shelf = [];
        this.selectedShelf = [];
    }

    //the function to add a book to a shelf
    addBookToShelf (book) {
        //variable to check if book exist
        let flag = false;
        //loop through the book shelf
        for (let i = 0; i < this.shelf.length; i++) {
            //if the book is found
            if (book.title === this.shelf[i].title) {
                flag = true;
                console.log("Book already exist");
                break;
            }
        }
        //if the book is not found add it to shelf
        if (flag === false) {
            this.shelf.push(book);
            console.log("Book added successfully");
        }
    }

    //Search books by genre
    searchBookByGenre (genre) {
        let tmpShelf = [];
        for (let i = 0; i < this.shelf.length;i++) {
            if (genre === this.shelf[i].genre) {
                tmpShelf.push(this.shelf[i]);
            }
        }

        this.selectedShelf = tmpShelf;
    }

    //Search books by department
    searchBookByDepartment (department) {
        let tmpShelf = [];
        for (let i = 0; i < this.shelf.length;i++) {
            if (department === this.shelf[i].department) {
                tmpShelf.push(this.shelf[i]);
            }
        }

        this.selectedShelf = tmpShelf;
    }

    //Search books by author
    searchBookByAuthor (author) {
        let tmpShelf = [];
        for (let i = 0; i < this.shelf.length;i++) {
            if (author === this.shelf[i].author) {
                tmpShelf.push(this.shelf[i]);
            }
        }

        this.selectedShelf = tmpShelf;
    }

    //display all books as html content to html
    printAllHtml(tagValue) {
        let bigText = "";
        for (let i = 0; i < this.shelf.length; i++) {
            console.log("book printer started");
            tag.innerHTML = tag.innerHTML + this.shelf[i].printBook();
        }

        
        
    }

}

//class for cart
class Cart {
    constructor(){
        this.books = [];
        this.subtotal = 0;
        this.Vat = 0.16;
        this.VatAmount = 0;
        this.total = 0;
    }
    constructor(cart) {
        this.books = cart.books;
        this.subtotal = 0;
        this.Vat = 0.16;
        this.VatAmount = 0;
        this.total = 0;
    }

    calculateSubtotal () {
        this.subtotal = 0;
        for (let i =0; i < this.books.length;i++) {
            this.subtotal = this.subtotal + parseFloat(this.books[i].price);
        }
    }

    calculateVatAmount() {
        this.VatAmount = this.subtotal * this.Vat;
    }

    calculateTotal() {
        this.total = this.subtotal + this.VatAmount;
    }

    calculate() {
        this.calculateSubtotal();
        this.calculateVatAmount();
        this.calculateTotal();
    }

    addBookToCart(book) {
        this.books.push(book);
    }

    emptyCart() {
        this.books = [];
    }
}
*/
//class for the entire system
class StoreApp {
    constructor() {
        this.user = new User("","","","");
        this.userState = "offline";
        this.users = [];
        this.books = [];
        //this.orders = [];
        //this.returns = [];
    }

    register(fullnames, email, phone, pwd, pwd2) {
        //check if the user exist
        let flag = false;
        let errorMessage = "";
        for (let i =0; i < this.users.length; i++) {
            //if the user is found
            if (email === this.users[i].email || phone === this.users[i].phone) {
                flag = true;
                break;
            }
        }

        if (flag === true) {
            errorMessage = "User already exist, please login.";
        } else {
            //check if the passwords match
            if (pwd === pwd2) {
                let newUser = new User(fullnames, email, phone, pwd);
                this.users.push(newUser);
                errorMessage = "User added successfully!";
            } else {
                errorMessage = "Password does not match";
            }
        }

        return errorMessage;

    }

    login(username, pwd) {
        //check if the user exist
        let flag = false;
        let errorMessage = "";
        for (let i = 0; i< this.users.length;i++) {
            if (this.users[i].email === username || this.users[i].phone === username) {
                this.user = this.users[i];
                flag = true;
                break;
            }
        }

        if (flag === true) {
            //check if password match
            if (this.user.pwd === pwd) {
                this.userState = "online";
            } else {
                //incorrect password
                errorMessage = "Incorrect password";
            }
        } else {
            errorMessage = "User not found, please try to register!";
        }
        console.log(errorMessage);
        return errorMessage;
    }

    login() {
        this.userState = "offline";
    }
    
}

//let user = new User("Desmond Milani", "des.godgiven@gmail.com", "0629067300", "@pWd1234");
/*
let book = new Book("The fault in our stars", "Desmond Milani", "199", "People living with cancer", "novel", "drama");
let book2 = new Book("Things fall apart", "Chinua Achebe", "199.99", "African wrestling", "novel", "action/adventure");
let book3 = new Book("Saving Private Ryan", "Desmond Milani", "199.99", "The police", "movies", "action/adventure");

let book4 = new Book("Book 4", "Desmond Milani", "199.99", "The police", "movies", "action/adventure");
let book5 = new Book("Book 5", "Desmond Milani", "199.99", "The police", "movies", "action/adventure");
let book6 = new Book("Book 6", "Desmond Milani", "199.99", "The police", "movies", "action/adventure");
let book7 = new Book("Book 7", "Desmond Milani", "199.99", "The police", "movies", "action/adventure");
let bookShelf = new BookShelf();
bookShelf.addBookToShelf(book);
bookShelf.addBookToShelf(book);
bookShelf.addBookToShelf(book2);
bookShelf.addBookToShelf(book3);
bookShelf.addBookToShelf(book4);
bookShelf.addBookToShelf(book5);
bookShelf.addBookToShelf(book6);
bookShelf.addBookToShelf(book7);


//This is where the code start running
let tag = document.querySelector("#container");
bookShelf.printAllHtml();

let x = new StoreApp();
x.registerUser("Desmond Milani", "des.godgiven@gmail.com", "0629067300", "111", "111");
x.loginUser("0629067300", "111");
*/