function guestCounter() {
  var cookie = document.cookie;

  if (document.cookie == "") { // Ja cepums ir tukšs (apmeklē 1. reizi), mainīgajam iestata vērtību 1
    var number = 1;
  }
  
  for (var i = 1; i < cookie.length; i++) { // Nolasa pašreizējo apmeklējumu skaitu
    if (cookie.charAt(i) == "=") { // Sameklē vienādības zīmi
      var number = cookie.substr(i+1); // Skaitli, kas seko aiz vienādības, ieglabā mainīgajā
    }
  }
  alert("Šis ir "+number+". apmeklējums"); // Izvada paziņojumu
  number++;
  document.cookie = "apmeklējumi="+number;
}