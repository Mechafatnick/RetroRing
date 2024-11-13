var rrDomain = window.location.hostname;
var rrBackgroundColor = '#1b0b3d';
var rrTextColor = '#ffffff';
var rrButtonColor = '#1b0b3d';
var rrButtonTextColor = '#ffffff';
var rrPosition = 'bottom'; // bottom, top, top-left, top-right, bottom-right, bottom-left
var rrCustomCSS = '';
var rrButton = 'corner'; // corner, left
var rrCornerIcon = 'url(/RetroRing/RetroRingSM.png)';


if (rrButton == 'left') {
  theStyle = document.createElement("style")
    theStyle.innerHTML = "rr-animate.rr-revoke.rr-bottom, .rr-animate.rr-revoke.rr-bottom.rr-active { position: fixed;bottom: 50 % ;left: -30 px;transform: rotate(90 deg) translateX(0 % );transform-origin: 0 % 100 % ; }.rr-animate.rr-revoke.rr-bottom: hover { transform: rotate(90 deg) translateY(-30 px);transform-origin: 0 % 100 % ;"
	document.querySelector("head").appendChild(theStyle)
}

if (rrButton == 'corner') {
    document.documentElement.style.setProperty('--rr-color', rrBackgroundColor);
    document.documentElement.style.setProperty('--rr-icon', rrCornerIcon);
    theStyle = document.createElement("style")
    theStyle.innerHTML = ".rr-animate.rr-revoke.rr-bottom { visibility: hidden; transform: none; vertical-align: -50%; display: flex; padding: 0; height: 75px; width: 75px;bottom: -4px;right: 29px;rotate: 270deg; } .rr-animate.rr-revoke.rr-bottom:after { visibility: visible; position: absolute; display: flex; align-items: center; top: 0; left: 0; padding: 5px; content: ''; background: var(--rr-color); /* ICON COLOR */ background-image: var(--rr-icon); /* ICON IMAGE */ background-size: 50%; background-repeat: no-repeat; background-position: bottom 10% left 10%; text-align: center; vertical-align: inherit; font-size: 6pt; height: 75px; width: 75px; clip-path: polygon(0% 0%, 0% 100%, 100% 100%); opacity: 0; -webkit-animation: fadeIn ease-in 1; /* make things invisible upon start */ -moz-animation: fadeIn ease-in 1; /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */ animation: fadeIn ease-in 1; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/ animation-fill-mode: forwards; -webkit-animation-duration: 0.5s; -moz-animation-duration: 0.5s; animation-duration: 0.5s; animation-delay: 0.5s;"; 
  document.querySelector("head").appendChild(theStyle)
}