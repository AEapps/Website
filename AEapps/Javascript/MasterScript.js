function ChangePage(PageName) {
    window.location = "/" + PageName + ".html";
}

function PageLinkColors() {
    //Page Link Stuff
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    if (sPage == "Home.aspx" || sPage == "Home.phtml" || sPage == "Home.html") {
        document.getElementById("HomeLink").classList.remove("h2NavLink");
        document.getElementById("HomeLink").classList.add("NavLinkWhite");
    }
    else if (sPage == "Our%20Apps.aspx" || sPage == "Our%20Apps.phtml" || sPage == "Our%20Apps.html") {
        document.getElementById("AppsLink").classList.remove("h2NavLink");
        document.getElementById("AppsLink").classList.add("NavLinkWhite");
    }
    else if (sPage == "About%20Us.aspx" || sPage == "About%20Us.phtml" || sPage == "About%20Us.html") {
        document.getElementById("AboutLink").classList.remove("h2NavLink");
        document.getElementById("AboutLink").classList.add("NavLinkWhite");
    }
    else if (sPage == "Contact%20Us.aspx" || sPage == "Contact%20Us.phtml" || sPage == "Contact%20Us.html") {
        document.getElementById("ContactLink").classList.remove("h2NavLink");
        document.getElementById("ContactLink").classList.add("NavLinkWhite");
    }
}

function CopyText(ElementID) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(ElementID).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

}