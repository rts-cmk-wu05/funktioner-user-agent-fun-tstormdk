//DEL 2 //Du skal oprette en funktion som returnerer (return) navnet på den browser som kigger på siden. Det er ok med de browsere som er på eksemplet.

//DEL 3 //Du skal nu oprette en funktion som giver en farve til det ikon som matcher den browser der er valgt. Der skal tilføjes en class til det aktuelle ikon.

let userAgents = ['Edg', 'Chrome', 'Safari', 'Firefox'];
/**
 * Funktion til at kigge efter browseren
 * der benyttes af brugeren
 * 
 * Der returneres et Browsernavn
 */
function getBrowserName(){
let browserName;
let ua = navigator.userAgent;

    for (var i=0; i<userAgents.length; i++) {
    //Find elementet
    browserName = userAgents[i];

        if (ua.includes(browserName)) {
         //console.log(profile);
        return browserName;
        }
    }
    //Hvis både Chrome & Safari er i userAgent == Chrome
    //Denne test mangler i løkken umiddelbart
}

function addColorToIcon(agenten){
    //Listen fra html - Alle med class .fab
 let faIconList = document.querySelectorAll(".fab");

 for (let i = 0; i < faIconList.length; i++) {

     if (faIconList[i].classList.contains(agenten)) {
        //  console.log("yey");
        faIconList[i].classList.add("userBrowser");
     }
 }
}

addColorToIcon(getBrowserName());

console.log(getBrowserName());