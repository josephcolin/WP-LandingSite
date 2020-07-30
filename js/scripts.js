// Function Hamburger Toggle Menu


function toggleMenu() {
  let getMenu = document.querySelector(".nav_links");
  getMenu.classList.toggle("hamburger");
  }

  let getHamburger = document.querySelector("#hamburger");

  getHamburger.addEventListener("click", toggleMenu);    
    









  // function ValidateEmail(inputText)
  
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
