function UpdateCurrentPage() {
    var PageName = document.title.replace("AEapps | ", "");

    var NavEnabledBTN = null;
    var FooterEnabledBTN = null;
    switch (PageName.toLowerCase()) {
        case "home":
            NavEnabledBTN = document.getElementById("HomeNavBTN");
            FooterEnabledBTN = document.getElementById("HomeFooterBTN");
            break;
        case "apps":
            NavEnabledBTN = document.getElementById("AppsNavBTN");
            FooterEnabledBTN = document.getElementById("AppsFooterBTN");
            break;
        case "projects":
            NavEnabledBTN = document.getElementById("ProjectsNavBTN");
            FooterEnabledBTN = document.getElementById("ProjectsFooterBTN");
            break;
        case "about":
            NavEnabledBTN = document.getElementById("AboutNavBTN");
            FooterEnabledBTN = document.getElementById("AboutFooterBTN");
            break;
        case "resume":
            NavEnabledBTN = document.getElementById("ResumeNavBTN");
            FooterEnabledBTN = document.getElementById("ResumeFooterBTN");
            break;
        case "contact":
            NavEnabledBTN = document.getElementById("ContactNavBTN");
            FooterEnabledBTN = document.getElementById("ContactFooterBTN");
            break;
    }

    //Set Active
    NavEnabledBTN.classList.add("active");
    FooterEnabledBTN.classList.add("active");
};

function NewsletterSignUp() {
    var UserEmail = document.getElementById("NewsletterEmailTxtBox").value;
    alert(UserEmail);
}