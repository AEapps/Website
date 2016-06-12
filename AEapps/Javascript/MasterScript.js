function ChangePage(PageName) {
    window.location = "/" + PageName + ".html";
}

function PageLinkColors() {
    switch(document.getElementsByTagName("title")[0].innerText)
    {
        case "AEapps | Home":
            document.getElementById("HomeLink").classList.remove("h2NavLink");
            document.getElementById("HomeLink").classList.add("NavLinkWhite");
            break;
        case "AEapps | Our Apps":
            document.getElementById("AppsLink").classList.remove("h2NavLink");
            document.getElementById("AppsLink").classList.add("NavLinkWhite");
            break;
        case "AEapps | About Us":
            document.getElementById("AboutLink").classList.remove("h2NavLink");
            document.getElementById("AboutLink").classList.add("NavLinkWhite");
            break;
        case "AEapps | Contact Us":
            document.getElementById("ContactLink").classList.remove("h2NavLink");
            document.getElementById("ContactLink").classList.add("NavLinkWhite");
            break;
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