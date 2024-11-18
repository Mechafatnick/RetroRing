SiteArray = [];

loadsiteData("https://mechafatnick.github.io/RetroRing/Data/RetroRing.xml")

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

function addSites() {
mainDiv = document.getElementById("maindiv")
for (i = 0; i< SiteArray.length; i++) {
siteDiv = document.createElement("div")
siteDiv = '<div id="siteDiv"><a href="'+SiteArray[i].URL+'<h2 class="siteName">' + SiteArray[i].NAME +'<p class="siteDes">' + SiteArray[i].Description + '</p> </div> <p class="divider"> ---- </p>'
mainDiv.appendChild(siteDiv)  
}
}
