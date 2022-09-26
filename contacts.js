const contactsPath = require("./db");

const invokeAction = async ({ action, contactId, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contactsPath.listContacts();
      console.log(allContacts);
      break;
    case "getContactById":
      const oneContact = await contactsPath.getContactById(contactId);
      console.log(oneContact);
      break;
    case "addContact":
      const newContact = await contactsPath.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "updateById":
      const updateContact = await contactsPath.updateById(contactId, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;
    case "removeContact":
      const deleteContact = await contactsPath.removeContact(contactId);
      console.log(deleteContact);
      break;
  }
};

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", contactId: "8" });
// invokeAction({
//   action: "addContact",
//   name: "Vova",
//   email: "qwe123@gmail.com",
//   phone: "(715) 598-5792",
// });
// invokeAction({
//   action: "updateById",
//   contactId: "DMp5KLMNe1purZLoisCBb",
//   name: "Misha",
//   email: "qaz987@gmal.com",
//   phone: "(832) 001-0092",
// });
// invokeAction({ action: "removeContact", contactId: "DMp5KLMNe1purZLoisCBb" });
