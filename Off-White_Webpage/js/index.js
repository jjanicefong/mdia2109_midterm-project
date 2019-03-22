var prod1 = document.querySelector("#prod-1"),
    prod2 = document.querySelector("#prod-2"),
    prod3 = document.querySelector("#prod-3"),
    prod4 = document.querySelector("#prod-4"),
    prod5 = document.querySelector("#prod-5"),
    prod6 = document.querySelector("#prod-6"),
    prod7 = document.querySelector("#prod-7"),
    prod8 = document.querySelector("#prod-8"),
    prod9 = document.querySelector("#prod-9"),
    prod10 = document.querySelector("#prod-10"),

    prodName = document.querySelector("#product-name"),
    prodImg = document.querySelector("#product-img"),
    bgWord = document.querySelector("#background-word"),

    addBtn = document.querySelector("#add-btn"),
    desc = document.querySelector("#product-desc-box"),
    descInfo = document.querySelector("#product-desc"),
    price = document.querySelector("#price-amount");

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

function mouse1() {
    prodName.innerHTML = "'BELT'";
    prodImg.style.backgroundImage = "url(/img/BELT.svg)";
    prodImg.style.top = "350px";
    bgWord.innerHTML = "BELT";
    descInfo.innerHTML = "yellow industrial belt >> <br><br> Nylon webbing belt in yellow and black. Red topstitching and black logo pattern woven throughout. Logo-engraved hinged cinch fastening. Black hardware. Tonal stitching.";
    price.innerHTML = 400;
}

function mouse2() {
    prodName.innerHTML = "'BACKPACK'";
    prodImg.style.backgroundImage = "url(/img/BACKPACK.svg)";
    prodImg.style.top = "230px";
    bgWord.innerHTML = "BACKPACK";
    descInfo.innerHTML = "black arrows backpack >> <br><br> Nylon-blend canvas backpack in black. Carry handle at top. Adjustable twin padded shoulder straps featuring grey topstitching and tonal woven logo pattern. Zippered compartments and logo graphic.";
    price.innerHTML = 600;
}

function mouse3() {
    prodName.innerHTML = "'HOODIE'";
    prodImg.style.backgroundImage = "url(/img/HOODIE.svg)";
    prodImg.style.top = "250px";
    bgWord.innerHTML = "HOODIE";
    descInfo.innerHTML = "b&w spray painted hoodie >> <br><br>Long sleeve cotton fleece hoodie in black. Drawstring at hood. Logo printed in white at front. Spray painted detailing in white and graphic bonded in yellow and black at waist. Signature diagonal stripes in white.";
    price.innerHTML = 700;
}

function mouse4() {
    prodName.innerHTML = "'SHIRT'";
    prodImg.style.backgroundImage = "url(/img/SHIRT.svg)";
    bgWord.innerHTML = "SHIRT";
    prodImg.style.top = "270px";
    descInfo.innerHTML = "short sleeve jersey t-shirt >><br><br> Text and graphics printed in multicolor throughout. Rib knit crewneck collar. Tonal webbing strap at interior. Tonal stitching.";
    price.innerHTML = 300;
}

function mouse5() {
    prodName.innerHTML = "'SHOES'";
    prodImg.style.backgroundImage = "url(/img/SHOE.svg)";
    prodImg.style.top = "350px";
    bgWord.innerHTML = "SHOES";
    descInfo.innerHTML = "low-top canvas sneakers >><br><br> Tonal suede cap at round toe. Signature red zip-tie, orange coating, and text printed in black at tonal lace-up closure. Tonal bonded trim featuring text printed in black at tongue.";
    price.innerHTML = 800;
}

function mouse6() {
    prodName.innerHTML = "'BAG'";
    prodImg.style.backgroundImage = "url(/img/BAG.svg)";
    bgWord.innerHTML = "BAG";
    prodImg.style.top = "300px";
    descInfo.innerHTML = "white mini diagonal flap bag >> <br><br>Grained leather shoulder bag in white. Detachable and adjustable logo webbing shoulder strap in yellow and black with post-stud fastening.";
    price.innerHTML = 1000;
}

function mouse7() {
    prodName.innerHTML = "'HAT'";
    prodImg.style.backgroundImage = "url(/img/HAT.svg)";
    bgWord.innerHTML = "HAT";
    descInfo.innerHTML = "black diagonal baseball cap >><br><br>Cotton twill baseball cap in black. Logo graphic embroidered in white at face. Cinch strap with press-stud fastening at back. Logo-engraved silver-tone hardware. Tonal stitching.";
    price.innerHTML = 200;
}

function mouse8() {
    prodName.innerHTML = "'SWEATER'";
    prodImg.style.backgroundImage = "url(/img/SWEATER.svg)";
    bgWord.innerHTML = "SWEATER";
    prodImg.style.top = "250px";
    descInfo.innerHTML = "black long sleeve sweater >><br><br>Long sleeve cotton jersey t-shirt in black. Rib knit crewneck collar and cuffs. Logo printed in white at front. Graphics printed in yellow and black at bust and back. Text flocked in blue at front and back hems. Rubberized patch at sleeve. Tonal stitching.";
    price.innerHTML = 600;
}

function mouse9() {
    prodName.innerHTML = "'PANTS'";
    prodImg.style.backgroundImage = "url(/img/PANTS.svg)";
    bgWord.innerHTML = "PANTS";
    prodImg.style.left = "350px";
    descInfo.innerHTML = "black lounge pants >><br><br>Relaxed-fit technical jersey lounge pants in black. Mid-rise. Drawstring in off-white at elasticized waistband. Two-pocket styling. Signature webbing trim in red and green at outseams. Rib knit cuffs. Tonal stitching.";
    price.innerHTML = 500;
}

function mouse10() {
    prodName.innerHTML = "'WALLET'";
    prodImg.style.backgroundImage = "url(/img/WALLET.svg)";
    bgWord.innerHTML = "WALLET";
    descInfo.innerHTML = "black diagonal bifold wallet >><br><br>Pebbled leather bifold wallet in black. Signature graphics printed in white at face. Eight card slots, two note slots, zippered pocket, embossed text, printed text in white, and textile flag in green at interior.";
    price.innerHTML = 300;
}

function clickDesc() {
    desc.style.height = "200px";
    desc.style.transition = "height 2s";
}

function closeDesc() {
    desc.style.height = "20px";
}




