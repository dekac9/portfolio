var progress = document.getElementsByClassName("num");
var celo = document.getElementsByClassName("progres");
var aboutContainer = document.getElementById("about");
var polozajMisa=document.getElementById("smoothScroll");
polozajMisa.addEventListener("click",proveriPokreni);
polozajMisa.addEventListener("wheel",proveriPokreni);

//Morao sam da stavim timeout za citanje koordinata zato sto pri skrolovanju izlaze koordinate kako se pomera ekran.
//Jedina dva nacina da se dodje do ABOUT strane jeste klikom ili scrolom pa sam zato na oba postavio listenere
function proveriPokreni(){
  setTimeout(() => {
    const currentScrollPosition = window.pageYOffset;
  console.log(currentScrollPosition)
  if(currentScrollPosition>=625 && currentScrollPosition<1250){
    // console.log("nanisanio")
    // ANIMACIJA HTML progresa
    let elem = document.getElementsByClassName("progress-value-html")[0];
    let cifra = document.getElementsByClassName("num")[0];
    let width = 1;
    let id = setInterval(frame, 20);
    function frame() {
      if (width >= 87) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        cifra.innerHTML = width + "%";
      }
    }
    // ANIMACIJA CSS progresa
    let drugi = document.getElementsByClassName("progress-value-css")[0];
    let cifraDrugi = document.getElementsByClassName("num")[1];
    let widthDrugi = 1;
    let idDrugi = setInterval(frameDrugi, 40);
    function frameDrugi() {
      if (widthDrugi >= 62) {
        clearInterval(idDrugi);
      } else {
        widthDrugi = widthDrugi + 0.5;
        drugi.style.width = widthDrugi + "%";
        cifraDrugi.innerHTML = parseInt(widthDrugi) + "%";
      }
    }

    // Animacija JS progresa
    let treci = document.getElementsByClassName("progress-value-js")[0];
    let cifraTreci = document.getElementsByClassName("num")[2];
    let widthTreci = 1;
    let idTreci = setInterval(frameTreci, 30);
    function frameTreci() {
      if (widthTreci >= 91) {
        clearInterval(idTreci);
      } else {
        widthTreci = widthTreci + 0.8;
        treci.style.width = widthTreci + "%";
        cifraTreci.innerHTML = parseInt(widthTreci) + "%";
      }
    }

    //Animacija REACT progresa

    let cetvrti = document.getElementsByClassName("progress-value-react")[0];
    let cifraCetvrti = document.getElementsByClassName("num")[3];
    let widthCetvrti = 1;
    let idCetvrti = setInterval(frameCetvrti, 30);
    function frameCetvrti() {
      if (widthCetvrti >= 74) {
        clearInterval(idCetvrti);
      } else {
        widthCetvrti = widthCetvrti + 1;
        cetvrti.style.width = widthCetvrti + "%";
        cifraCetvrti.innerHTML = parseInt(widthCetvrti) + "%";
      }
    }
  }else{
    console.log("nista")
  }
  }, 600);
  
}

//SVE ISPOD OVOGA

// aboutContainer.addEventListener("mouseover", () => {
//   
//   console.log(currentScrollPosition);

//   // console.log(progress);
//   // console.log(celo);
// });


// ANIMACIJA HTML progresa
let elem = document.getElementsByClassName("progress-value-html")[0];
let cifra = document.getElementsByClassName("num")[0];
let width = 1;
let id = setInterval(frame, 20);
function frame() {
  if (width >= 87) {
    clearInterval(id);
  } else {
    width++;
    elem.style.width = width + "%";
    cifra.innerHTML = width + "%";
  }
}
// ANIMACIJA CSS progresa
let drugi = document.getElementsByClassName("progress-value-css")[0];
let cifraDrugi = document.getElementsByClassName("num")[1];
let widthDrugi = 1;
let idDrugi = setInterval(frameDrugi, 40);
function frameDrugi() {
  if (widthDrugi >= 62) {
    clearInterval(idDrugi);
  } else {
    widthDrugi = widthDrugi + 0.5;
    drugi.style.width = widthDrugi + "%";
    cifraDrugi.innerHTML = parseInt(widthDrugi) + "%";
  }
}

// Animacija JS progresa
let treci = document.getElementsByClassName("progress-value-js")[0];
let cifraTreci = document.getElementsByClassName("num")[2];
let widthTreci = 1;
let idTreci = setInterval(frameTreci, 30);
function frameTreci() {
  if (widthTreci >= 91) {
    clearInterval(idTreci);
  } else {
    widthTreci = widthTreci + 0.8;
    treci.style.width = widthTreci + "%";
    cifraTreci.innerHTML = parseInt(widthTreci) + "%";
  }
}

//Animacija REACT progresa

let cetvrti = document.getElementsByClassName("progress-value-react")[0];
let cifraCetvrti = document.getElementsByClassName("num")[3];
let widthCetvrti = 1;
let idCetvrti = setInterval(frameCetvrti, 30);
function frameCetvrti() {
  if (widthCetvrti >= 74) {
    clearInterval(idCetvrti);
  } else {
    widthCetvrti = widthCetvrti + 1;
    cetvrti.style.width = widthCetvrti + "%";
    cifraCetvrti.innerHTML = parseInt(widthCetvrti) + "%";
  }
}
