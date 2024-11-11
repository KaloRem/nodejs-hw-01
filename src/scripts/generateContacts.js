import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = (count) => {
  const contacts = readContacts();
  const newContacts = [];

  for (let i = 0; i < count; i++) {
    newContacts.push(createFakeContact());
  }

  const allContacts = [...contacts, ...newContacts];
  writeContacts(allContacts);

  console.log(`Додано ${count} нових контактів.`);
};

generateContacts(5);
