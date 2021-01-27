//Du skal oprette en funktion som returnerer (return) navnet på den browser som kigger på siden. Det er ok med de browsere som er på eksemplet.

let agenten = navigator.userAgent;
console.log(agenten);
//let userAgents = ['Firefox', 'Chrome', 'Safari', 'Edg'];

function getBrowserName(){
let browserName;
//Finde Firefox i den streng som jeg får fra UserAgent
if(navigator.userAgent.includes("Edg")){
    browserName = "Edge";
   }
else if(navigator.userAgent.includes("Firefox")) {
    browserName = "Firefox";    
}
else if(navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Safari")) {
    browserName = "Chrome";
    //Hvis både Chrome og Safari er i userAgent - betyder det at det er Chrome :)  
}
else if(navigator.userAgent.includes("Safari")){
 browserName = "Safari"
}
return browserName;
}

console.log(getBrowserName());