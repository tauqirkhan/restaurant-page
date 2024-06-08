import category from './menuCategory.js';
import dish from './menuItems.js';

function menuPage(content){

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    h1.classList.add('menuHead');

    content.appendChild(h1);

    const discription = 'This is demo template. Hope you like it';

    category(content, "Recommended");
    dish(content, "Recommended1", discription, '$');
    dish(content, "Recommended2", discription, '$$');
    dish(content, "Recommended3", discription, '$$$');

    category(content, "Sides");
    dish(content, "Sides1", discription, '$');
    dish(content, "Sides2", discription, '$$');
    dish(content, "Sides3", discription, '$$$');

    category(content, "Deserts");
    dish(content, "Desert1", discription, '$');
    dish(content, "Desert2", discription, '$$');
    dish(content, "Desert3", discription, '$$$');
}

export default menuPage;