window.onload = function()
{
    const icons = document.querySelector('.icons');
    const cartCloseBtn = document.querySelector('.fa-close');
    const cartBox = document.querySelector('.cartBox');

    icons.addEventListener("click",function(){
            cartBox.classList.add('active');
    });

    cartCloseBtn.addEventListener("click",function(){
        cartBox.classList.remove('active');
    });

    //adding data to local storage

    const addToCartBtn = document.getElementsByClassName('addToCart');
    
    let bookItems = [];

    for(let i = 0; i < addToCartBtn.length; i++)
    {
        addToCartBtn[i].addEventListener("click",function(e)
        {
        
            if(typeof(Storage) !== 'undefined')
            {
                    let books = 
                    {
                        id:i + 1,
                        name:e.target.parentElement.children[0].textContent,
                        price:e.target.parentElement.children[1].children[0].textContent,
                        no:1
                    };

                    if(JSON.parse(localStorage.getItem('bookItems')) === null)
                    {
                        bookItems.push(books);
                        localStorage.setItem("bookItems", JSON.stringify(bookItems));
                        window.location.reload();
                    }
                   else
                        {
                            const localItems = JSON.parse(localStorage.getItem("bookItems"));
                            localItems.map(data =>
                                {
                                    if(books.id == data.id)
                                    {
                                        books.no =data.no + 1;
                                    }else
                                    {
                                        bookItems.push(data);
                                    }
                                });

                                bookItems.push(books);
                                localStorage.setItem('bookItems',JSON.stringify(bookItems));
                                window.location.reload();
                        }
            }
            else
            {
                    alert('local storage is not working on your browser');
            }
 
        });
    }


    //adding data to shopping cart

    const iconsP = document.querySelector('.icons p');
    let no = 0;
    JSON.parse(localStorage.getItem('bookItems')).map(data =>
        {
            no = no + data.no
        });
        iconsP.innerHTML = no;

    //adding cartBox data in table

    const cardBoxTable = cartBox.querySelector('table');
    let tableData = '';
    tableData += '<tr><th>S no.</th><th>Book Name</th><th>Book No</th><th>Book Price</th><th></th></tr>';
    
    if(JSON.parse(localStorage.getItem('bookItems'))[0] === null)
    {
        tableData += '<tr><td colspan = "5">No Items Found</td></tr>';
    }else
    {
        JSON.parse(localStorage.getItem('bookItems')).map(data =>
            {
                tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick = Delete(this);>Delete</a></th></tr>';
            });
            
    }

    
            


}
