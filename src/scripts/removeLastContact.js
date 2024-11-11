// src/scripts/removeLastContact.js
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Останній контакт був видалений.');
    } else {
      console.log('Немає контактів для видалення.');
    }
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
  }
};

removeLastContact();
