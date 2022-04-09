function getCookieByName(name) {
  let c = document.cookie
    .split("; ")
    .find((cookie) => cookie && cookie.startsWith(name + "="))
  return c ? c.split("=")[1] : false
}

function changeTheme(e) {
  e.preventDefault()
  const htmlTag = document.getElementsByTagName("html")[0]

  if (htmlTag.className.includes("dark")) {
    htmlTag.className = "light"
    document.cookie = "theme=light"
  } else {
    htmlTag.className = "dark"
    document.cookie = "theme=dark"
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function verifyScrollToShowButton() {
  var scrollTopButton = document.getElementById("back-to-top")
  if (scrollTopButton != null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      scrollTopButton.classList.add("block")
      scrollTopButton.classList.remove("hidden")
    } else {
      scrollTopButton.classList.add("hidden")
      scrollTopButton.classList.remove("block")
    }
  }
}

//Menu
/*********************/
/* Toggle Menu */
/*********************/
function toggleMenu() {
  document.getElementById("isToggle").classList.toggle("open")
  var isOpen = document.getElementById("navigation")
  if (isOpen.style.display === "block") {
    isOpen.style.display = "none"
  } else {
    isOpen.style.display = "block"
  }
}
/*********************/
/*    Menu Active    */
/*********************/
function getClosest(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1
      }
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem
  }
  return null
}

function activateMenu() {
  var menuItems = document.getElementsByClassName("sub-menu-item")
  if (menuItems) {
    var matchingMenuItem = null
    for (var idx = 0; idx < menuItems.length; idx++) {
      const menuItem = menuItems[idx]
      debugger
      if (
        menuItem.href === window.location.href ||
        window.location.pathname.startsWith(menuItem.getAttribute("data-href"))
      ) {
        matchingMenuItem = menuItem
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active")
      var immediateParent = getClosest(matchingMenuItem, "li")
      if (immediateParent) {
        immediateParent.classList.add("active")
      }

      var parent = getClosest(matchingMenuItem, ".parent-menu-item")
      if (parent) {
        parent.classList.add("active")
        var parentMenuitem = parent.querySelector(".menu-item")
        if (parentMenuitem) {
          parentMenuitem.classList.add("active")
        }
        var parentOfParent = getClosest(parent, ".parent-parent-menu-item")
        if (parentOfParent) {
          parentOfParent.classList.add("active")
        }
      } else {
        var parentOfParent = getClosest(
          matchingMenuItem,
          ".parent-parent-menu-item"
        )
        if (parentOfParent) {
          parentOfParent.classList.add("active")
        }
      }
    }
  }
}
