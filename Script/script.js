
document.getElementById("search").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        var term = document.getElementById("search").value;
            if (term=="Kanit"||term=="kanit"||term=="KANIT"||term=="Kanit Mann"||term=="KANIT MANN"||term=="Kanit mann" || term=="kanit mann"){
                window.location.href = "Kanit.html";
                }
            else{
                window.location.href = "https://www.google.com";
            }
    }
});

function search(){
    var term = document.getElementById("search").value;
    if (term=="Kanit"||term=="kanit"||term=="KANIT"||term=="Kanit Mann"||term=="KANIT MANN"||term=="Kanit mann" || term=="kanit mann"){
        window.location.href = "Kanit.html";
        }
    else{
        window.location.href = "https://www.google.com";
    }
};


document.querySelector(".clickme").addEventListener("click", function () {
	document.getElementById("mypop").style.display = "block";
});

document.querySelector(".ok").addEventListener("click", function () {
	document.getElementById("mypop").style.display = "none";
});
