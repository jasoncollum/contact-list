/*
    Author: Jason Collum
    Name: contact.js
    Purpose: Display a person's name, phone number and address
*/
const contactDisplay = document.querySelector('.output');

function renderContact(contact) {
    const contactDiv = document.createElement('div');
    const contactName = document.createElement('h2');
    const contactPhone = document.createElement('p');
    const contactAddress = document.createElement('p');

    contactName.textContent = contact.name;
    contactPhone.textContent = contact.phone;
    contactAddress.textContent = contact.address;

    contactDiv.append(contactName, contactPhone, contactAddress);
    contactDisplay.append(contactDiv);
}

export default renderContact;