import { Search } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <Search
        type="text"
        name="filtr"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </>
  );
};
