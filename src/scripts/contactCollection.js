/*
    Author: Jason Collum
    Name: contactCollection.js
    Purpose: Load existing contacts
*/
const baseURL = `http://localhost:8088`;

const ContactCollection = {
    // Get all contacts
    getContacts: function () {
        return fetch(`${baseURL}/contacts`).then(res => res.json())
    },
    // Save a contact
    saveContact: function (contact) {
        return fetch(`${baseURL}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact)
        }).then(res => res.json())
    },
    // Get one contact
    getOneContact: function (id) {
        return fetch(`${baseURL}/contacts/${id}`).then(res => res.json())
    }
}

export default ContactCollection;