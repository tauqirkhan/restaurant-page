function category(parent, name){
    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.classList.add('category');

    parent.appendChild(h2);
}

export default category;