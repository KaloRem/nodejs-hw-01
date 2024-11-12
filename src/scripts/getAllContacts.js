import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Контакти:', contacts);
    return contacts;
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error);
  }
};

const runGetAllContacts = async () => {
  await getAllContacts();
};

runGetAllContacts();
