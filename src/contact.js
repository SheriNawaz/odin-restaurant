function contact() {
    const content = document.getElementById('content');

    content.textContent = ''; // clear current content

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    content.appendChild(headline);

    const info = document.createElement('p');
    info.textContent = 'Have questions or feedback? Send us a message.';
    content.appendChild(info);

    const form = document.createElement('form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';
    nameLabel.htmlFor = 'contact-name';
    form.appendChild(nameLabel);
    const nameInput = document.createElement('input');
    nameInput.id = 'contact-name';
    nameInput.type = 'text';
    nameInput.required = true;
    form.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'contact-email';
    form.appendChild(emailLabel);
    const emailInput = document.createElement('input');
    emailInput.id = 'contact-email';
    emailInput.type = 'email';
    emailInput.required = true;
    form.appendChild(emailInput);

    const msgLabel = document.createElement('label');
    msgLabel.textContent = 'Message';
    msgLabel.htmlFor = 'contact-msg';
    form.appendChild(msgLabel);
    const msgInput = document.createElement('textarea');
    msgInput.id = 'contact-msg';
    msgInput.rows = 5;
    msgInput.required = true;
    form.appendChild(msgInput);

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Send';
    form.appendChild(submit);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // simple in-page confirmation; replace with real submit logic later
        content.textContent = '';
        const thanks = document.createElement('p');
        thanks.textContent = `Thanks, ${nameInput.value || 'visitor'}! We'll be in touch at ${emailInput.value || 'your email'}.`;
        content.appendChild(thanks);
    });

    content.appendChild(form);
}
export default contact;