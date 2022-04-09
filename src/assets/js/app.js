/* Template Name: LDW Solutions - Multipurpose Tailwind CSS Landing Page Template
   Author: Shreethemes
   Email: support@shreethemes.in
   Website: https://shreethemes.in
   Version: 1.4.0
   Created: May 2022
   File Description: Main JS file of the template
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Loader               *
 *     02.  Toggle Menus         *
 *     03.  Active Menu          *
 *     04.  Clickable Menu       *
 *     05.  Back to top          *
 *     06.  Feather icon         *
 *     06.  DD Menu              *
 *     06.  Active Sidebar Menu  *
 *     07.  Contact us           *
 *     08.  Wow Animation JS     *
 ================================*/

/*********************/
/*  Clickable manu   */
/*********************/
if (document.getElementById("navigation")) {
  var elements = document.getElementById("navigation").getElementsByTagName("a")
  for (var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function (elem) {
      if (elem.target.getAttribute("href") === "javascript:void(0)") {
        var submenu = elem.target.nextElementSibling.nextElementSibling
        submenu.classList.toggle("open")
      }
    }
  }
}
/*********************/
/*   Menu Sticky     */
/*********************/
function windowScroll() {
  const navbar = document.getElementById("topnav")
  if (navbar != null) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky")
    } else {
      navbar.classList.remove("nav-sticky")
    }
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault()
  windowScroll()
})

/*********************/
/*  Active Sidebar   */
/*********************/
;(function () {
  var current = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  )
  if (current === "") return
  var menuItems = document.querySelectorAll(".sidebar-nav a")
  for (var i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
      menuItems[i].parentElement.className += " active"
    }
  }
})()

/*********************/
/*   Feather Icons   */
/*********************/
feather.replace()

/*********************/
/*    DD Menu        */
/*********************/
var ddmenu = document.getElementsByClassName("dd-menu")
for (var i = 0, len = ddmenu.length; i < len; i++) {
  ddmenu[i].onclick = function (elem) {
    elem.stopPropagation()
  }
}

/*********************/
/*     Small Menu    */
/*********************/
try {
  var spy = new Gumshoe("#navmenu-nav a")
} catch (err) {}

/*********************/
/*      WoW Js       */
/*********************/
try {
  new WOW().init()
} catch (error) {}
