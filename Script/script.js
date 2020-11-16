function search() {
    var term = document.getElementById("search").value;
    if (term=="Kanit"||term=="kanit"||term=="KANIT"||term=="Kanit Mann"||term=="KANIT MANN"||term=="Kanit mann" || term=="kanit mann"){
        window.location.href = "Kanit.html";
        }
    else{
        window.location.href = "https://www.google.com";
    }
  }


var modal = document.getElementById("pop");

document.querySelector(".clickme").addEventListener("click", function () {
	document.getElementById("mypop").style.display = "block";
});

document.querySelector(".ok").addEventListener("click", function () {
	document.getElementById("mypop").style.display = "none";
});
