function login() {
    // get value from local storage
    // use a flag
    let ipEmail = $("#txtEmail").val();
    let ipPw = $("#txtPw").val();
    let flag = false;
    let userlist = readUser();
    for (let i = 0; i < userlist.length; i++) {
        let user = userlist[i];
        if (user.email === ipEmail && user.password == ipPw) {
            flag = true;
            window.location = "user.html";
        }
        if (!flag) {
            $("#alert").removeClass("hide");
            setTimeout(function () {
                $("alert").addClass("hide");
            }, 3000);
        }


    }
}
function init() {
    $("#btnlogin").click(login);
    $("#btnregis").click(function(){
        window.location = "register.html";
    });

}
window.onload = init;