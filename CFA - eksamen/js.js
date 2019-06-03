
var dropCookie = true; // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14; // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie'; // Name of our cookie
var cookieValue = 'on'; // Value of cookie
function createDiv(){
var bodytag = document.getElementsByTagName('body')[0];
var div = document.createElement('div');
div.setAttribute('id','cookie-law');
div.innerHTML = '<p>Denne hjemmeside benytter sig af cookies. Klik her for at se mere omkring vores brug af cookies <a href="http://trykwebbureau.dk/oliver/cookie.html" target="_blank" rel="nofollow" title="Privacy &amp; Cookies Policy">privacy and cookies policy</a>. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span id="cookieclose">&times;</span></a></p>';

bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class to the <body> tag when the banner is visible
createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}
function createCookie(name,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
if(window.dropCookie) {
document.cookie = name+"="+value+expires+"; path=/";
}
}
function checkCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
function eraseCookie(name) {
createCookie(name,"",-1);
}
window.onload = function(){
if(checkCookie(window.cookieName) != window.cookieValue){
createDiv();
}
}
function removeMe(){
var element = document.getElementById('cookie-law');
element.parentNode.removeChild(element);
}

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});