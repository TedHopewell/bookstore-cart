let app;

if(localStorage.getItem("users")=== null)
{
    app = new LocalApp();
    localStorage.setItem("users", JSON.stringify(["",""]));
}else
{
    app = new LocalApp();
    let strArray = localStorage.getItem("users");
    let users = JSON.parse(strArray);
    app.users = users;
}

function registerUser()
{
    let fullnames = document.querySelector("#fullnames").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let pwd = document.querySelector("#pwd").value;
    let pwd2 = document.querySelector("#pwd2").value;

    app.addUser(fullnames, email, phone, pwd, pwd2);
    localStorage.setItem("users", JSON.stringify(app.users));


}

function loginUser()
{
    let uid = document.querySelector("#uid").value;
    let password = document.querySelector("#password").value;

    if(app.loginUser(uid, password))
    {
        location.href = "booksStoreHome.html";
    }


}
