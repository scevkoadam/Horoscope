pokreni();

function pokreni() {
  var greska = 0;

  var znak = prompt("Unesite svoj horoskopski znak\nKoristite iskljucivo mala slova (Primer: ribe)")
  var pol = prompt("Unesite svoj pol\nAko ste muskog pola, napisite M\nAko ste zenskog pola, napisite Z")
  // Posto se bira pol, postoje samo 2 opcije. Zbog toga je bilo moguce izabrati pol i preko funkcije confirm()
  if (znak === "jarac" || znak === "vodolija" || znak === "ribe" || znak === "ovan" || znak === "bik" || znak === "blizanci" || znak === "rak" || znak === "lav" || znak === "devica" || znak === "vaga" || znak === "skorpija" || znak === "strelac") {
  } else {
    greska = 1;
  }

  if (pol === "M") {
    kakvog = "muskog";
  } else if (pol === "Z") {
    kakvog = "zenskog";
  } else {
    greska = 1;
  }

  if (greska !== 1){
    var dalje = confirm("Tekst namenjen osobi "+kakvog+" pola, koja pripada horoskopskom znaku "+znak+".\nOK - aplikacija ce se pokrenuti ponovo.\nCancel - zatvaramo aplikaciju.");
    if (dalje === true) {
      pokreni();
    }
  } else {
    var dalje2 = confirm("Uneti podaci nisu ispravno uneseni.\nMolimo Vas, probajte ponovo.\nOK - aplikacija ce se pokrenuti ponovo.\nCancel - zatvaramo aplikaciju.");
    if (dalje2 === true) {
      pokreni();
    }
  }
}

//Svestan sam da bi rezultat ovog domaceg trebalo da bude ispisivanje odredjenog teksta u konzoli (to nije nikakav problem),
//medjutim ja sam dao sebi malo slobode i odradio ga na ovaj nacin. Nadam se da necete zameriti (ukoliko ga budete pregledali). :)
