import ContactCollection from "./contactCollection";
import renderContactList from "./contactList"

// import ContactCollection from "./contactCollection";

const formContainer = document.querySelector('#form-container');

function renderForm() {
    const form = document.createElement('form');
    form.innerHTML = `
        <fieldset>
            <label for="name">Name: </label>
            <input type="text" id="name" placeholder="Enter your name">
        </fieldset>
        <fieldset>
            <label for="phone">Phone: </label>
            <input type="text" id="phone" placeholder="Enter your phone number">
        </fieldset>
        <fieldset>
            <label for="address">Address: </label>
            <input type="text" id="address" placeholder="Enter your address">
        </fieldset>
        <button type="submit" id="submit-btn">Save Contact Info</button>
    `

    formContainer.append(form);
}

formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const address = document.querySelector('#address');

    const newContact = {
        name: name.value,
        phone: phone.value,
        address: address.value
    }

    name.value = '';
    phone.value = '';
    address.value = '';

    ContactCollection.saveContact(newContact)
        .then(res => {
            ContactCollection.getContacts()
                .then(renderContactList())
        })
})

export default renderForm;