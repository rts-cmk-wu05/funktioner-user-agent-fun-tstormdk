let browserAgent = navigator.userAgent;
console.log(browserAgent);

let browserAgentArray = ['Firefox','Chrome','OPR','Safari','Edg'];

var ua = navigator.userAgent;
var profile;

    for (var i=0; i<browserAgentArray.length; i++) {
    profile = browserAgentArray[i];
   //console.log(profile);
        if (ua.includes(profile)) {
   
         console.log(profile);
        //return profile.match;
        }
    }

    function addColorToBrowserIcon(agent) {
    //Find section som indeholder browseragenten
    const faSection = document.querySelectorAll('i');
        for (let i = 0; i < faSection.length; i++) {
            if(faSection[i].classList.contains(agent)){
            faSection[i].classList.add("userBrowser");
            }
   
        }
    }
  