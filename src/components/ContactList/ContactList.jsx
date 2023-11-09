import { ContactItem } from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
