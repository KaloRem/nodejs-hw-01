import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const readContacts = async () => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error.message);
    return [];
  }
};

export { readContacts };
