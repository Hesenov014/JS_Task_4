function hesabCeminiRublla(rubHesabi, dollarHesabi) {
 
    let cemRubl = rubHesabi + (dollarHesabi * 75);

  
    console.log("Bütün depozitlər üzrə məbləğ: " + cemRubl + " rubl.");
}



let rublSorus = +prompt("Rubl miqdarini daxil edin")
let dollarSorus= +prompt("Dollar miqdarini daxil edin")
hesabCeminiRublla(rublSorus, dollarSorus); 