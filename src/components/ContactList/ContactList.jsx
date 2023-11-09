import { ContactItem } from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const getFilteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {getFilteredContacts.map(el => (
        <li key={el.id}>
          <ContactItem userData={el} />
        </li>
      ))}
    </ul>
  );
};
