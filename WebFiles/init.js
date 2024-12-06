SiteArray = []
loadsiteData("https://mechafatnick.github.io/RetroRing/Data/RetroRing.xml")
rrTriangle = document.createElement("div")
rrTriangle.innerHTML = '<div class="rr-revoke rr-bottom rr-animate rr-color-override--135587744" style="opacity: 1; z-index: 9999;" onclick="toggleVisible()">Retro Ring</div>'
document.querySelector("body").appendChild(rrTriangle)
rrMainDiv = document.createElement("div")
rrMainDiv.innerHTML = '<img src="/RetroRing/RetroRingLogo.png"></img><p class="rr-font">This site is a member of Retro Ring, a group of sites who carry out original research into classic videogames</p><div style="display:flex;flex-direction:row;flex-wrap:wrap"><button class="rr-button" onclick="prevSite()">Previous</button><button class="rr-button" onclick="randSite()">Random</button><button class="rr-button" onclick="openHome()">List</button><button class="rr-button" onclick="nextSite()">Next</button></div>'
rrMainDiv.classList.add('rr-window', 'rr-banner', 'rr-type-opt-in', 'rr-theme-edgeless', 'rr-bottom', 'rr-color-override--135587744', 'rr-invisible'); 
rrMainDiv.onclick = function() { toggleVisible() };
document.querySelector("body").appendChild(rrMainDiv)

rrTriangle = document.getElementsByClassName("rr-revoke")[0]
rrMainDiv= document.getElementsByClassName("rr-window")[0]

rrMainDiv.style.zIndex = -1;

function toggleVisible(){
rrTriangle.classList.toggle('rr-invisible');
rrMainDiv.classList.toggle('rr-invisible');
checkZ();
}

function checkZ(){
if(rrMainDiv.style.zIndex < 9999){rrMainDiv.style.zIndex =9999; return}
  if(rrMainDiv.style.zIndex == 9999){value = setTimeout(function(){rrMainDiv.style.zIndex =-1}, 500);}
}

function loadsiteData(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x, i, xmlDoc, txt;
      xmlDoc = this.responseXML
      x = xmlDoc.getElementsByTagName("row")
      for (i = 0; i< x.length; i++) {
      SiteArray.push( {NAME: x[i].getElementsByTagName('NAME')[0].innerHTML, URL: x[i].getElementsByTagName('URL')[0].innerHTML, Description: x[i].getElementsByTagName('Description')[0].innerHTML})
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function nextSite(){
  currentDomain = window.location.origin
  theIndex = checkDomain(currentDomain)
  theIndex++
  if(theIndex > (SiteArray.length -1)){theIndex = 0} 
  window.open(SiteArray[theIndex].URL, '_blank')
  
}
 
 function randSite(){
  theIndex = Math.floor(Math.random() * (SiteArray.length-1));
  console.log(theIndex)
  window.open(SiteArray[theIndex].URL, '_blank')
  
}


function prevSite(){
  currentDomain = window.location.origin
  theIndex = checkDomain(currentDomain)
  theIndex--
  if(theIndex < (0)){theIndex = 0} 
  window.open(SiteArray[theIndex].URL, '_blank')
}

function openHome(){
 window.open('https://mechafatnick.github.io/RetroRing/', '_blank')
}

function checkDomain(currentDomain){
 for (i = 0; i< SiteArray.length; i++) {
if(SiteArray[i].URL.indexOf(currentDomain) > -1){
 return i 
}  
}
return -1  
}
