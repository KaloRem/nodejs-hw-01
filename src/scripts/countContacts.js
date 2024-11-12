import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error);
    return 0;
  }
};

const runCountContacts = async () => {
  console.log(await countContacts());
};

runCountContacts();
