function getCostCombo() {
    var x = document.getElementById("combo1");
    var y = document.getElementById("combo2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none"
    } else {
        x.style.display = "none"
        y.style.display = "block"
    }
}

function getColorCombo() {
    var x = document.getElementById("combo2");
    var y = document.getElementById("combo1");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none"
    } else {
        x.style.display = "none"
        y.style.display = "block"
    }
}