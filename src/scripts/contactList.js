import RenderContact from "./contact";
import ContactCollection from "./contactCollection";

function renderContactList() {
    ContactCollection.getContacts()
        .then(contacts => {
            contacts.forEach(contact => {
                RenderContact(contact);
            })
        })
}

export default renderContactList;