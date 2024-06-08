import './style.css';

function homepage(content){
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant Home Page';
    h1.classList.add('h1');

    content.appendChild(h1);

    const p1 = document.createElement('p');
    p1.textContent = 'Welcome to _Restaurant, where culinary excellence meets a cozy ambiance. Enjoy our chef\'s special dishes made from the freshest ingredients, bringing flavors from around the world to your table. Join us for an unforgettable dining experience!';

    content.appendChild(p1);

    const hours = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Hours';
    h2.classList.add('h2');

    const p2 = document.createElement('p');
    p2.innerHTML =  `Monday: 9:00 AM - 10:00 PM<br>
    Tuesday: 9:00 AM - 10:00 PM<br>
    Wednesday: 9:00 AM - 10:00 PM<br>
    Thursday: 9:00 AM - 10:00 PM<br>
    Friday: 9:00 AM - 11:00 PM<br>
    Saturday: 10:00 AM - 11:00 PM<br>
    Sunday: 10:00 AM - 9:00 PM`
    p2.classList.add('p2');

    hours.appendChild(h2);
    hours.appendChild(p2);

    hours.classList.add('hours');
    content.appendChild(hours);

    const location = document.createElement('div');

    const h3 = document.createElement('h2');
    h3.textContent = 'location';
    h3.classList.add('h2');

    const p3 = document.createElement('p');
    p3.textContent = 'Windsor Grande, Mumbai, India';
    p3.classList.add('p2');

    location.appendChild(h3);
    location.appendChild(p3);

    location.classList.add('location');
    content.appendChild(location);
}

export default homepage;