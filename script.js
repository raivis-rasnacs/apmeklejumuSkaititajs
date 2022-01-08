function guestCounter() {
  var cookie = document.cookie;

  if (cookie == "") { // Ja cepums ir tukšs (apmeklē 1. reizi), mainīgajam iestata vērtību 1
    var skaits = 1;
  }
  else {
    for (var i = 1; i < cookie.length; i++) { // Nolasa pašreizējo apmeklējumu skaitu
      if (cookie.charAt(i) == "=") { // Sameklē vienādības zīmi
        var skaits = cookie.substr(i+1); // Skaitli, kas seko aiz vienādības, ieglabā mainīgajā
      }
    }
  }
  alert("Šis ir "+skaits+". apmeklējums"); // Izvada paziņojumu
  skaits++; // Palielina skaitu
  document.cookie = "apmeklējumi="+skaits; // Ieraksta datus sīkdatnē
}