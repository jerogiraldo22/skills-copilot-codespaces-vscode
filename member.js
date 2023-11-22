function skillsMember() {
    var x = document.getElementById("skills");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("skills").style.height = "auto";
    } else {
        x.style.display = "none";
        document.getElementById("skills").style.height = "0px";
    }
}  