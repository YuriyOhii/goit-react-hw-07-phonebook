import PropTypes from 'prop-types';
import { TelNumber, DelButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export const ContactItem = ({ userData: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <p>
      {name} : <TelNumber>{number}</TelNumber>
      <DelButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DelButton>
    </p>
  );
};

ContactItem.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
