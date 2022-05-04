class User {
    constructor(fname, lname, gender, address, email, phone, pw, payment) {
        this.fistname = fname;
        this.lastname = lname;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = pw;
        this.payment = payment;
    }
}
function isValid(user) {
    let valid = true;
    // if (user.email.length == 0) {
    //     valid = false;
    //     console.log("add an email");
    //     $("#txtEmail").addClass("input-error");
    // }
    // if (user.password.length == 0) {
    //     valid = false;
    //     console.log("add an password");
    // }
    // if (user.fistname.length == 0) {
    //     valid = false;
    //     console.log("add an First Name");
    $("input").removeClass("input-error");
    if (user.email.length == 0) {
        valid = false;
        console.error("Add an email");
        $("#txtEmail").addClass("input-error");
    }
    if (user.password == 0) {
        valid = false;
        console.error("Add Password");
        $("#txtPW").addClass("input-error");
        console.log("Password must be at least 6 Character")
        txtPw.css("border", "2px solid red");
        displayError("Password is too short");
    }
    return valid;
}
function validatePw() {
    let txtPw = $("#txtPW");
    let pw = txtPw.val();
    if (pw.length < 6) {
        console.log("Password must be at least 6 Character")
        txtPw.css("border", "2px solid red");
        displayError("Password is too short");

       
    }
    else {
        txtPw.css("border", "2px solid green");
        hideError();
    }

}
function displayError(msg){
    $("#alert").removeClass("hide").text(msg);

}
function hideError(){
    $("#alert").addClass("hide");
}

function register() {
    let inputFname = $("#txtFName").val();
    let inputLnam = $("#txtLName").val();
    let inputGender = $("#sGender").val();
    let inputAddress = $("#txtAddress").val();
    let inputEmail = $("#txtEmail").val();
    let inputPhone = $("#txtPhone").val();
    let inputPw = $("#txtPW").val();
    let payment = $("#sPayment").val();

    // console.log(inputFname, inputLnam, inputEmail, inputPw);
    let newUser = new User(inputFname, inputLnam, inputGender, inputAddress, inputEmail, inputPhone, inputPw, payment);
    console.log(newUser);
   
    if (isValid(newUser)) {
        saveUser(newUser);        
        $('input').val("");
    }
}
function init() {
    console.log("Register");
    $("#txtPW").keyup(validatePw);

}
window.onload = init;