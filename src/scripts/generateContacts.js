import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (count) => {
  try {
    const contacts = await readContacts();
    const newContacts = [];

    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }

    const allContacts = [...contacts, ...newContacts];
    await writeContacts(allContacts);

    console.log(`Додано ${count} нових контактів.`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
};

generateContacts(5);
