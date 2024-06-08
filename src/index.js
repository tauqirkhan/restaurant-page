import homepage from './homepage.js';
import menuPage from './menu.js';
import contactpage from './contact.js';

const content = document.querySelector('#content');

const buttons = document.querySelectorAll('button');

homepage(content);

buttons.forEach(button => {
    button.addEventListener('click', handleButton);
});

function handleButton(e){
    content.textContent = '';
    let name = e.target.className;

    if(name == 'home'){
        homepage(content);
        return;
    }
    if(name == 'menu'){
        menuPage(content);
        return;
    }
    if(name == 'contact'){
        contactpage(content);
        return;
    }
}