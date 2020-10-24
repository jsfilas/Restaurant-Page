import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadContact} from './contact';


function loadNav() {
    const navBar = document.querySelector('#tabs');
    navBar.innerHTML = 
    `<ul>
         <img id='logo' src='Images/logo.png' alt="Cassanova Brothers Logo">
         <li id='contact'>Contact Us<a/></li>
         <li id='menu'>Menu<a/></li>
         <li id='home'>Home<a/></li>
    </ul>`;
}

function pageLoad() {
    console.log("Page Initalized");

    const contentSection = document.querySelector('#content');

    loadHome();
    console.log("Home Page Loaded");
    
    document.querySelector('#menu').addEventListener('click', () => {
        reset();
        loadMenu();
        console.log("Menu Page Loaded");
    });

    document.querySelector('#home').addEventListener('click', () => {
        reset();
        contentSection.innerHTML = '';
        loadHome();
        console.log("Home Page Loaded");
    });

    document.querySelector('#contact').addEventListener('click', () => {
        reset();
        loadContact();
        console.log("Contact Page Loaded");
    });
   


}


const reset = function() {
    console.log('Reset Completed...initializing user click direction');
    const divBody = document.querySelector('#divBody');


    while (divBody.childElementCount > 0) {
        divBody.removeChild(divBody.lastChild);
    }

}

export {
    pageLoad, loadNav
};