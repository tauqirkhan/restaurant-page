import './style.css';
import image from './bg.jpg';

function homepage(content){
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant';

    content.appendChild(h1);

    const img = new Image();
    img.src = image;
    img.classList.add('img');

    content.appendChild(img);

    const p = document.createElement('p');
    p.textContent = 'this is very good restaurant';

    content.appendChild(p);
    
}

export default homepage;