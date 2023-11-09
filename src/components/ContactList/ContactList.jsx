import { ContactItem } from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedValue)
    );
  };

  return (
    <ul>
      {getFilteredContacts().map(el => (
        <li key={el.id}>
          <ContactItem userData={el} />
        </li>
      ))}
    </ul>
  );
};
