import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const writeContacts = async (contacts) => {
  try {
    await fs.promises.writeFile(
      PATH_DB,
      JSON.stringify(contacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Помилка при записі контактів:', error.message);
  }
};

export { writeContacts };
