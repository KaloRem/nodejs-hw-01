import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js'; // Для перевірки наявності контактів

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Немає контактів для видалення.');
      return;
    }

    await writeContacts([]);
    console.log('Усі контакти були видалені.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error.message);
  }
};

removeAllContacts();
