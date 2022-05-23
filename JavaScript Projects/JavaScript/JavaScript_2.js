function validateForm() {
    let v = document.forms["form"]["email"].value;
    if (v.length < 4) {
        alert("Please enter a valid email");
        return false;
    }
}