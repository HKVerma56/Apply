








function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}
function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}
function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}

function signup(){
  closeForm2();
  openForm();

}


function Filter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function whatsapp(num,p){
  var company=num
  var job=p

  window.open("https://wa.me/+91"+company+"?text=Hello,%20I%20want%20to%20apply%20for%20the%20"+job+"%20position")

}
