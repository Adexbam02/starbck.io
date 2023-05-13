
const lis = document.querySelectorAll('#menuBtn li');

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function() {
    for (let j = 0; j < lis.length; j++) {
      lis[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

const btnList = document.querySelectorAll('.tab button');

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener('click', function() {
    // console.log('dfgh');

    for (let j = 0; j < lis.length; j++) {
      lis[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

// ++++++++++ SCROLL ++++++++++

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpn").click();
document.getElementById("defaultOpen").click();


function openFavour(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

