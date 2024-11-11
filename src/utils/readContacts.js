import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const readContacts = () => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

export { readContacts };
