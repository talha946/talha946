const btns= document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal")
const overlay = document.getElementById("overlay");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});
close_modals.forEach((btn) =>{
    btn.addEventListener("click", () => {const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
window.onclick = (event) => {
    if (event.target == overlay){
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};



function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var messsage = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;
    if(name.length < 2){
        text = "Please Enter valid name (Minimum 3 characters)";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10){
        text = "Please Enter Correct Subject (Minimum 10 characters)";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number(10-digit)";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 140){
        text = "Please enter more than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length >= 500){
        text = "Please enter less than 500 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form submitted successfully! Thank you for contacting us");
    return true;
}




function filter(){
    var filterValue, input, Productlist,ProductName,h4,i;
    input = documentl.getElementById("search");
    filterValue - input.value.toUpperCase();
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementByClassName("col-4");
    for(i = 0 ; i < ProductName.length ; i++){
        h4 = ProductName[i].getElementByTagName("h4")[0];
        if(h4.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            ProductName[i].style.display ="";
        }
        else{
            ProductName[i].style.display = "none";
        }
    }
}
function sortList(){
    var ProductList, ProductName, i, switching, b, c, shouldSwitch;
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    switching = true
    while (switching){
        switching = false;
        for(i = 0 ; i < (ProductName.length - 1) ; i++){
            shouldSwitch = false;
            b= ProductName[i].getElementsByTagName("span")[0].innerHTML;
            c= ProductName[i+1].getElementsByTagName("span")[0].innerHTML;
            if(Number(b) >Number(c)){
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            ProductName[i].parentNode.insertBefore(ProductName[i + 1], ProductName[i]);
            switching = true;
        }
    }
}