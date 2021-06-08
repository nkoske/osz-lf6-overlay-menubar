function openCity(evt, cityName) {
  saveSessionItem('button_'+cityName,"visited")
 /*gets Classes of buttons bevfore wipe*/
 /*and checks if buttons are active and / or marked */
  var classes = evt.currentTarget.classList;
  prevActive = false
  prevMarked = false
  for (var classidx = 0;classidx < classes.length ;classidx ++) {
    currClass = classes[classidx];
    if (currClass === "active") {
      prevActive = true;
    }
    if (currClass === "marked") {
      prevMarked = true;
    }
  }

  var i, tabcontent, tablinks;
  /*unset PREVOIS TAB*/
    /*hide previous Tab*/
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    /*remove active class from previous tab*/
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

  /*set clicked Tab*/
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    if (prevActive == true  && prevMarked == false ) {
      evt.currentTarget.className += " marked";
    }
    if (prevActive == true  && prevMarked == true ) {
      evt.currentTarget.className = evt.currentTarget.className.replace(" marked", "");
    }
}

function loadSessionItems () {
}

function saveSessionItem (cookieName,cookieVal) {
    window.sessionStorage.setItem(cookieName,cookieVal)
    fetchSessionItems();
}

function fetchSessionItems () {
  var sessItems = window.sessionStorage;
  var buttons = document.getElementsByClassName('tablinks')

  for (var buttonidx = 0 ;buttonidx < buttons.length ; buttonidx ++) {
    currButton = buttons[buttonidx];

    if (sessItems['button_'+currButton.name] == "visited") {
        console.log(currButton.name+ "  "+ sessItems['button_'+currButton.name])
        currButton.className += " visited";
    }
  }
}
function clearSession () {
  window.sessionStorage.clear()
  location.reload()
}

window.onload = function() {
  loadSessionItems();
  document.getElementById("defaultOpen").click();

}
