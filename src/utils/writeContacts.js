import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const writeContacts = (contacts) => {
  try {
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};

export { writeContacts };
