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

// Get the button that opens the modal
document.getElementsByClassName("clickme").addEventListener("click", function()
{  document.getElementById("mypop").style.display = "block";
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("end")[0];

// When the user clicks on <span> (x), close the modal
span.onClick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onClick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}