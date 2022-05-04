
let c = 0;
const pcount = document.getElementById("counterid");
function counter() {

    c++;
    pcount.innerHTML = c;
}

const divjqery = $("#counterid");
function jqcounter() {
    c++;
    divjqery.innerHTML = c;

}
function init() {
    $("#bttn-counter").on('click', counter);
    $("#bttn-counter").on('mouseover', function () {
        console.log("the user attempt to click");
    })
    $("#a-info-1").on('click', function () {
        $("#info-2").hide();
        $("#info-1").show();
    })
    $("#a-info-2").on('click', function () {
        $("#info-1").hide();
        $("#info-1")
        $("#info-2").show();
    })
    $("#show-all").on('click', function () {
        $("#info-1").show();
        $("#info-2").show();
    })
}
window.onload = init;