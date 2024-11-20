const btns= document.querySelectorAll("[data-target]");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});
function validate() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    var phonePattern = /^[0-9]{10}$/;
    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    } else if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        return false;
    }
    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }
    if (message == "") {
        alert("Please enter your message.");
        return false;
    }
    alert("Form submitted successfully! Thank you for contacting us");
    return true;
}
function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function validateFeedback() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please provide your email.");
        return false;
    }
    if (feedback.trim() === "") {
        alert("Please provide your feedback.");
        return false;
    }
    alert("Form submitted successfully! Thanks for your Feedback");
    return true;
}

