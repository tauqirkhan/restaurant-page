function dish(upperDiv, dishName, dishDescription, dishPrice){

    const boxDiv = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = dishName;
    h2.classList.add('dishName');
    boxDiv.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = dishDescription;
    p.classList.add('description');
    boxDiv.appendChild(p);
    
    const price = document.createElement('h2');
    price.textContent = dishPrice;
    price.classList.add('dishPrice');
    boxDiv.appendChild(price);

    const img = document.createElement('div');
    img.classList.add('imgMock');
    boxDiv.appendChild(img)

    boxDiv.classList.add('boxDiv');
    upperDiv.appendChild(boxDiv);
}

export default dish;