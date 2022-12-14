let regex = new RegExp("[a-z0-9]+@[a-z]+" + "gmail" +".[a-z]{2,3}");


function validate() {
    var email = document.getElementById('emailId');
    var pass = document.getElementById('passId');

    console.log("btn clickd....");
    if (email.value == "" || regex.test(email.value)) {
        window.alert("enter valid email detail!");
        email.classList.add("is-invalid");
    }
    if (pass.value == "") {
        window.alert("enter vald password");
        pass.classList.add("is-invalid");
    }

    btn.location.href = "./h"
}


btn.addEventListener("click", validate);

console.log("its online!!");