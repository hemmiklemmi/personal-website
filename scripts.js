let isMenuOpen = false;
const menuButton = document.getElementById("menu-button")
const menuItems = document.getElementById("menu")
const mainSection = document.getElementById("main-section")
const project =document.getElementById("projects")
const contact =document.getElementById("contact")
function check_menu(){
    if (isMenuOpen)
        close_menu();
    else 
        open_menu();
}

function open_menu(){
    menuButton.classList = "fa fa-times fa-2x";
    menuItems.style.display = "flex"
    mainSection.style.opacity = "0.3"
    project.style.display = "none" 
    contact.style.display = "none" 
    mainSection.style.display ="flex"
    isMenuOpen = true;
}

function close_menu(){
    menuButton.classList = "fa fa-bars fa-2x";
    menuItems.style.display = "none"
    mainSection.style.opacity = "1"
    isMenuOpen = false;
}
function show_projects(){
   project.style.display = "flex"
   close_menu();
   mainSection.style.display ="none"

}
function show_home(){
    close_menu();
    mainSection.style.display ="flex"
 
 }
 function show_contact(){
    contact.style.display = "flex"
    close_menu();
    mainSection.style.opacity = "0.3" 
    mainSection.style.display ="none"
 
 }