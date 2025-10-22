function menu() {
    const content = document.getElementById("content");
    content.textContent = ''; 
    const headline = document.createElement("h1");
    headline.textContent = "Menu:";
    content.appendChild(headline);

    const menuItems = document.createElement("ul");
    const item1 = document.createElement("li");
    item1.textContent = "Chicken";
    menuItems.appendChild(item1);
    const item2 = document.createElement("li");
    item2.textContent = "Fish";
    menuItems.appendChild(item2);
    const item3 = document.createElement("li");
    item3.textContent = "Steak";
    menuItems.appendChild(item3);
    content.appendChild(menuItems);
}

export default menu;