import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import { selectFilter } from '../../redux/selectors';

import { BsSearch } from 'react-icons/bs';
import { LabelWrapper, Input, LabelDescr } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <LabelDescr>
      <LabelWrapper>
        <BsSearch size="16" />
        Find contacts by name
      </LabelWrapper>
      <Input
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Search..."
      />
    </LabelDescr>
  );
};
