// Challenge 1


function changeColor() {
    let color = document.getElementById('changeColor');
    color.style.color = "red";

    let bColor = document.getElementById('changeColor');
    color.style.backgroundColor = "pink";

}

// Challenge 2
function beGone() {
    document.getElementById("grossfood").style.opacity = 0;
  }
  
  function itsBack() {
    document.getElementById("grossfood").style.opacity= 100;
  }