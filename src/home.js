function home() {
    const content = document.getElementById("content");
    content.textContent = ''; // clear current content
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our Restaurant!";
    content.appendChild(headline);

    const tagline = document.createElement("p");
    tagline.textContent = "Best restaurant around!";
    content.appendChild(tagline);
}

export default home;