function toggleActiveTab(id, sender) {
  if (sender.classList.contains("active")) {
    return;
  }

  var allTabs = document.getElementsByClassName("tab-content");
  var allTabButtons = document.getElementsByClassName("tab-button");

  sender.classList.add("active");

  for (var i = 0; i < allTabs.length; i++) {
    if (allTabs[i].id == id && !allTabs[i].classList.contains("active")) {
      allTabs[i].classList.add("active");
    } else {
      allTabs[i].classList.remove("active");
    }

    if (allTabs[i].classList.contains("active")) {
      allTabs[i].style.display = "block";
    } else {
      allTabs[i].style.display = "none";
    }
  }

  for (var i = 0; i < allTabButtons.length; i++) {
    if (allTabButtons[i].id == id) {
      allTabButtons[i].classList.add("active");
    } else {
      allTabButtons[i].classList.remove("active");
    }
  }
}


var scrollbutton = document.getElementById("scrollToTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
