

// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
 function hamburger_menu() {
    var x = document.getElementById("main_nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

// function ValidateEmail(inputText)
  {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
  document.form1.text1.focus();
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  document.form1.text1.focus();
  return false;
  }
  }