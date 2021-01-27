//DEL 2 //Du skal oprette en funktion som returnerer (return) navnet på den browser som kigger på siden. Det er ok med de browsere som er på eksemplet.

//DEL 3 //Du skal nu oprette en funktion som giver en farve til det ikon som matcher den browser der er valgt. Der skal tilføjes en class til det aktuelle ikon.

// let agenten = navigator.userAgent;
// console.log(agenten);
let userAgents = ['Edg', 'Chrome', 'Safari', 'Firefox'];

function getBrowserName(){
let browserName;
let ua = navigator.userAgent;

    for (var i=0; i<userAgents.length; i++) {
    //Find elementet
    browserName = userAgents[i];
   console.log(browserName);
        if (ua.match(browserName)) {
         //console.log(profile);
        return browserName;
        }
    }
    //Hvis både Chrome & Safari er i userAgent == Chrome
}

console.log(getBrowserName());